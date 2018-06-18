(function(global) {

function Todo(props) {
	React.Component.call(this, props);
	this.state = { valState1:{ valState2:'def' } };
}

Todo.prototype = Object.create(React.Component.prototype);
Todo.prototype.constructor = Todo;

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

global.compMap['todo'] = function(callback) {
	callback(null, Todo);
};

})(BNW);