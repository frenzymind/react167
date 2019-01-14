import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[Persons.js] Constructor')
    this.lastPersonRef = React.createRef()
  }

  // componentWillMount() {
  //   console.log('[Persons.js] Inside component will mount')
  // }

  componentDidMount() {
    console.log('[Persons.js] Did mount')
    this.lastPersonRef.current.focus()
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] WillReceiveProps', nextProps)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     '[UPDATE Persons.js] ShouldCOmponentUpdate',
  //     nextProps,
  //     nextState,
  //   )
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.click !== this.props.click
  //   )
  //   //return true
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] componentWillUpdate', nextProps, nextState)
  // }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] componentDidUpdate')
  }

  render() {
    console.log('[Persons.js] Render')
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
          position={index}
          name={person.name}
          age={person.age}
          ref={this.lastPersonRef}
          key={person.id}
        />
      )
    })
  }
}

export default Persons
