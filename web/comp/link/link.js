(function(global) {

function Link(props) {
	React.Component.call(this, props);
	this.state = { valState1:{ valState2:'def' } };
}

Link.prototype = Object.create(React.Component.prototype);
Link.prototype.constructor = Link;

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

global.compMap['link'] = function(callback) {
	callback(null, Link);
};

})(BNW);