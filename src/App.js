/**
 * Dependencies
 */
import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

/*** Components*/
import TabsComponent from './components/tabs.component'
import BagContainer from './api/bag/bag.container'
import PaymentContainer from './api/payment/payment.container'
import ConfirmContainer from './containers/confirm.container'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tab: 0
    }
  }

  componentWillReceiveProps({ history }, nextContext) {
    this.setState({ tab: this.handleView(history.location.pathname) })
  }

  handleView = pathname => {
    switch (pathname) {
      case '/payment':
        return 1
      case '/confirm':
        return 2
      default:
        return 0
    }
  }

  handleTab = tab =>
    this.setState({ tab }, () =>
      this.props.history.push(tab ? (tab === 1 ? '/payment' : '/confirm') : '/')
    )

  render() {
    return (
      <div className="App">
        <TabsComponent selected={this.state.tab} handleTab={this.handleTab} />

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={500}>
                <Switch location={location}>
                  <Route exact path="/" component={BagContainer} />
                  <Route exact path="/payment" component={PaymentContainer} />
                  <Route exact path="/confirm" component={ConfirmContainer} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    )
  }
}

export default withRouter(App)
