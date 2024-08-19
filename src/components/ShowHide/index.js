// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstNameShow: false,
    lastNameShow: false,
  }

  firstNameToogle = () => {
    const {firstNameShow} = this.state

    this.setState({firstNameShow: !firstNameShow})
  }

  LastNameToogle = () => {
    const {lastNameShow} = this.state

    this.setState({lastNameShow: !lastNameShow})
  }

  render() {
    const {firstName, lastName} = this.props
    const {firstNameShow, lastNameShow} = this.state

    return (
      <div className="bg">
        <h1 className="head">Show/Hide</h1>
        <div className="names-container">
          <div className="name-container">
            <button
              type="button"
              onClick={this.firstNameToogle}
              className="btn"
            >
              Show/Hide FirstName
            </button>
            {firstNameShow && (
              <div className="name-card">
                <p>{firstName}</p>
              </div>
            )}
          </div>

          <div className="name-container">
            <button type="button" onClick={this.LastNameToogle} className="btn">
              Show/Hide LastName
            </button>
            {lastNameShow && (
              <div className="name-card">
                <p>{lastName}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

ShowHide.defaultProps = {
  firstName: 'Joe',
  lastName: 'Jonas',
}

export default ShowHide
