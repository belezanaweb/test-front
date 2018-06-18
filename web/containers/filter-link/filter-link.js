(function(global) {

var ActionCreators = global.redux.ActionCreators;

function mapStateToProps(state, ownProps) {
	return {
		active: ownProps.filter === state.visibilityFilter
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onClick: function() {
			dispatch(ActionCreators.setVisibilityFilter(ownProps.filter))
		}
	};
}

global.containerMap['filter-link'] = function(callback) {
	global.loadManager.loadMany({
		Link: 'bnw--link'
	}, function(err, comps) {
		if (err) return callback(err);
		return callback(null, ReactRedux.connect(
			mapStateToProps,
			mapDispatchToProps
		)(comps.Link))
	});
};

})(BNW);