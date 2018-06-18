(function(global) {

function TodoList(props) {
	React.Component.call(this, props);
	this.state = { valState1:{ valState2:'def' } };
}

TodoList.prototype = Object.create(React.Component.prototype);
TodoList.prototype.constructor = TodoList;

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

global.compMap['todo-list'] = function(callback) {
	callback(null, TodoList);
};

})(BNW);