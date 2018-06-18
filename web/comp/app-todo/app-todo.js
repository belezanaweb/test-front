(function(global) {

function AppTodo(props) {
	React.Component.call(this, props);
}

AppTodo.prototype = Object.create(React.Component.prototype);
AppTodo.prototype.constructor = AppTodo;

global.compMap['app-todo'] = function(callback) {
	callback(null, AppTodo);
};

})(BNW);