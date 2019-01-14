import React, { Component } from 'react'
import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Auxiliary'
import PropTypes from 'prop-types'
import { AuthContext } from '../../../containers/App'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('[Person.js] Constructor')
    this.inputRef = React.createRef()
  }

  // componentWillMount() {
  //   console.log('[Persos.js] Will mount')
  // }

  componentDidMount() {
    console.log('[Person.js] Did mount')
    if (this.props.position === 0) {
      this.inputRef.current.focus()
    }
  }

  focus() {
    this.inputRef.current.focus()
  }

  render() {
    console.log('[Person.js] Render')
    // return [
    //   <p onClick={this.props.click}>
    //     I&#39;m {this.props.name} and I am
    //     {this.props.age}
    //     years old
    //   </p>,
    //   <p>{this.props.children}</p>,
    //   <p>{this.props.children}</p>,
    // ]

    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => (auth ? <p>I authenticated</p> : null)}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I&#39;m {this.props.name} and I am
          {this.props.age}
          years old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        <p>We will live forever!</p>
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
}

export default withClass(Person, classes.Person)
