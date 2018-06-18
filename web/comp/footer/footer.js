(function(global) {

function Footer(props) {
	React.Component.call(this, props);
	this.local = {
		VisibilityFilters: global.redux.VisibilityFilters
	};
}

Footer.prototype = Object.create(React.Component.prototype);
Footer.prototype.constructor = Footer;

global.compMap['footer'] = function(callback) {
	callback(null, Footer);
};

})(BNW);