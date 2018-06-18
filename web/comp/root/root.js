(function(global) {

function Root(props) {
	React.Component.call(this, props);
	this.state = { valState1:{ valState2:'def' } };
}

Root.prototype = Object.create(React.Component.prototype);
Root.prototype.constructor = Root;

global.compMap['root'] = function(callback) {
	callback(null, Root);
};

})(BNW);