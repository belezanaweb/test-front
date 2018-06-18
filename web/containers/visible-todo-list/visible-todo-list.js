(function(global) {

var Utils = global.Utils;
var ActionCreators = global.redux.ActionCreators;

function getVisibleTodos(todos, filter) {
	switch (filter) {
		case 'SHOW_ALL':
			return todos
		case 'SHOW_COMPLETED':
			return Utils.filter(todos, function(t) {return t.completed;});
		case 'SHOW_ACTIVE':
			return Utils.filter(todos, function(t) {return !t.completed;});
	}
}

function mapStateToProps(state, ownProps) {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onTodoClick: function(id) {
			dispatch(ActionCreators.toggleTodo(id));
		}
	};
}

global.containerMap['visible-todo-list'] = function(callback) {
	global.loadManager.loadMany({
		TodoList: 'bnw--todo-list'
	}, function(err, comps) {
		if (err) return callback(err);
		return callback(null, ReactRedux.connect(
			mapStateToProps,
			mapDispatchToProps
		)(comps.TodoList))
	});
};

})(BNW);