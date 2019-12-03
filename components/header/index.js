import React from 'react';
import { connect } from 'react-redux';
import { fetchPath } from '../products/action-creators';
import { bindActionCreators } from 'redux';

import style from './style.scss';

class Header extends React.PureComponent {
	componentDidMount() {
		if (!this.props.path) {
			this.props.fetchPath(location.pathname);
		}
	}
	render() {
		const { path } = this.props;
		return (
			<div className="menuContainer">
				<section className="menuContent">
					<a
						className={
							path === '/cart' ? 'menuItem active' : 'menuItem'
						}
						href="/cart"
					>
						SACOLA
					</a>
					<a
						className={
							path === '/payment' ? 'menuItem active' : 'menuItem'
						}
						href="/payment"
					>
						PAGAMENTO
					</a>
					<a
						className={
							path === '/success' ? 'menuItem active' : 'menuItem'
						}
						href="/success"
					>
						CONFIRMAÇÃO
					</a>
				</section>
			</div>
		);
	}
}

const mapStateToProps = state => ({ ...state.global });

const mapDispatchToProps = dispatch =>
	bindActionCreators({ fetchPath }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
