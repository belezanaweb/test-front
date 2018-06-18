(function(global) {

function Index(props) {
	React.Component.call(this, props);
	this.state = { valState1:{ valState2:'def' } };
}

Index.prototype = Object.create(React.Component.prototype);
Index.prototype.constructor = Index;

global.compMap['index'] = function(callback) {
	callback(null, Index);
};

})(BNW);