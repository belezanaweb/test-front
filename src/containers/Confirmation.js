import React, { Component } from 'react';
import { connect } from 'react-redux';

class Confirmation extends Component {
    render() {
        console.log(this.props.state)
        return (
            <div>{this.props.state.form.PaymentForm.values.cardNumber}</div>
        ) 
    }
}

const mapStateToProps = (state) => ({
    state: state
})

export default connect(mapStateToProps)(Confirmation);