
var BNW = BNW || {};

(function(global) {

var Utils = global.Utils;
global.compMap = {};
global.containerMap = {};

// var componentLoader = Utils.fnComponentLoader({
// 	prefix: 'bnw--',
// 	createElement: React.createElement,
// 	getHref: function(match) {
// 		return global.BaseUrl + '/comp/' + match.href;
// 	},
// 	fnGetJs: function(match) {
// 		return function() {
// 			return global.compMap[match.name];
// 		};
// 	},
// 	subComponentLoader: Comp
// });

function Comp(props) {
	React.Component.call(this, props);
	this.state = {
		component: null,
		error: null
	};
}

Comp.prepareElement = function(element, match) {
	var props = element.props || {};
	props['$comp'] = element.type;
	element.type = Comp;
	element.props = props;
};
Comp.prototype = Object.create(React.Component.prototype);
Comp.prototype.constructor = Comp;
Comp.prototype.componentDidMount = function() {
	var self = this;
	var id = this.props.$comp;
	loadManager(id, function(err, comp) {
		if (err) {
			console.error(err, id, self);
			return self.setState({ error: err });
		}
		return self.setState({ component: comp });
	});
};
Comp.prototype.render = function() {
	var C = this.state.component;
	var props = {};
	Utils.forEachProperty(this.props, function(value, key) {
		if ('$comp' !== key) props[key] = value;
	});
	var args = [C, props].concat(this.children || []);
	return C ? React.createElement.apply(React, args) : null;
};

var compLoader = Utils.fnPrefixLoader();
var containerLoader = Utils.fnPrefixLoader();
var loadManager = Utils.fnLoadManager({
	prefixLoaders: [
		compLoader,
		containerLoader
	],
	createElement: React.createElement,
	createElementMods: [
		Utils.fnCreateElement.fixClassName()
	],
});
compLoader.setOpt({
	prefix: 'bnw--',
	loader: Utils.componentDynamic,
	createElement: loadManager.createElement,
	prepareElement: Comp.prepareElement,
	getUrl: function(match) {
		return global.BaseUrl + 'comp/' + match.href;
	},
	setJs: function(match, callback) {
		global.compMap[match.path](function(err, js) {
			match.js = js;
			callback(err);
		});
	}
});
containerLoader.setOpt({
	prefix: 'bnw-container--',
	loader: Utils.componentDynamic,
	createElement: loadManager.createElement,
	prepareElement: Comp.prepareElement,
	getUrl: function(match) {
		return global.BaseUrl + 'containers/' + match.href;
	},
	setJs: function(match, callback) {
		global.containerMap[match.path](function(err, js) {
			match.js = js;
			callback(err);
		});
	},
	pathCss: function() { return null; },
	pathHtml: function() { return null; }
});

global.loadManager = loadManager;
global.compLoader = compLoader;
global.containerLoader = containerLoader;

ReactDOM.render(
	React.createElement(
		ReactRedux.Provider,
		{ store: global.redux.store },
		loadManager.createElement(
			'bnw--root',
			{ valProp1: { valProp2:'abc' } }
		)
	),
	document.getElementById('bnw-mount')
);

// global.store.commit('setScreen', 1);

})(BNW);
