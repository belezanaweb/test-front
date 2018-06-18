(function(global) {
/**
	* action types
	**/

var ActionTypes = {
	ADD_TODO: 'ADD_TODO',
	TOGGLE_TODO: 'TOGGLE_TODO',
	SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

/**
	* other constants
	**/

var VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/**
	* action creators
	**/

var ActionCreators = {
	addTodo: function (text) {
		return { type: ActionTypes.ADD_TODO, text }
	},
	toggleTodo: function (index) {
		return { type: ActionTypes.TOGGLE_TODO, index }
	},
	setVisibilityFilter: function (filter) {
		return { type: ActionTypes.SET_VISIBILITY_FILTER, filter }
	}
};

var Reducers = {
	todos: function todos(state, action) {
		state || (state = []);
		switch (action.type) {
			case ActionTypes.ADD_TODO:
				return state.concat([
					{
						text: action.text,
						completed: false
					}
				]);
			case ActionTypes.TOGGLE_TODO:
				return state.map(function(todo, index) {
					if (index === action.index) {
						return Object.assign({}, todo, {
							completed: !todo.completed
						});
					}
					return todo;
				});
			default:
				return state;
		}
	},
	visibilityFilter: function visibilityFilter(state, action) {
		state || (state = VisibilityFilters.SHOW_ALL);
		switch (action.type) {
			case ActionTypes.SET_VISIBILITY_FILTER:
				return action.filter
			default:
				return state
		}
	}
};

var rootReducer = Redux.combineReducers({
	todos: Reducers.todos,
	visibilityFilter: Reducers.visibilityFilter
});

var store = Redux.createStore(rootReducer);

global.redux = {
	ActionTypes: ActionTypes,
	VisibilityFilters: VisibilityFilters,
	ActionCreators: ActionCreators,
	Reducers: Reducers,
	rootReducer: rootReducer,
	store: store
};

})(BNW);