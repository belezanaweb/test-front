(function(global) {

function AddTodo(props) {
	React.Component.call(this, props);
	this.state = { valState1:{ valState2:'def' } };
	this.local = {};
}

AddTodo.prototype = Object.create(React.Component.prototype);
AddTodo.prototype.constructor = AddTodo;

AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
};

global.compMap['add-todo'] = function(callback) {
	callback(null, AddTodo);
};

})(BNW);