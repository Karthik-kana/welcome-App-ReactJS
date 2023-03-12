// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribed: false}

  subscribe = () => {
    this.setState(prevState => ({subscribed: !prevState.subscribed}))
  }

  render() {
    const {subscribed} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Welcome</h1>
          <p>Thank you! Happy learning</p>
          <button type="button" onClick={this.subscribe}>
            {subscribed ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
