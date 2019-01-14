import React, { PureComponent } from 'react'
import classes from './App.css'
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'
import Aux from '../hoc/Auxiliary'
import withClass from '../hoc/withClass'

export const AuthContext = React.createContext(false)

class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[App.js] Constructor', props)
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 24 },
        { id: '2', name: 'Kolya', age: 25 },
        { id: '3', name: 'Vanya', age: 28 }
      ],
      otherState: 'Some text here',
      showPersons: false,
      toggleClicked: 0,
      auth: false
    }
  }

  /*componentWillMount() {
    console.log('[App.js] Inside component will mount')
  }*/

  /* componentDidMount() {
    console.log('[App.js] Did mount')
  }*/

  /*static getDerivedStateFromProps(nextProps, prevProps) {
    console.log(
      '[UPDATE App.js] getDerivedStateFromProps',
      nextProps,
      prevProps,
    )

    return prevProps
  }*/

  // getSnapshotBeforeUpdate() {
  //   console.log('[UPDATE App.js] getSnapshotBeforeUpdate')
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     '[UPDATE App.js] ShouldCOmponentUpdate',
  //     nextProps,
  //     nextState,
  //   )
  //   //return true
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   )
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] componentWillUpdate', nextProps, nextState)
  // }

  componentDidUpdate() {
    console.log('[UPDATE App.js] componentDidUpdate')
  }

  // state = {
  //   persons: [
  //     { id: '1', name: 'Max', age: 24 },
  //     { id: '2', name: 'Kolya', age: 25 },
  //     { id: '3', name: 'Vanya', age: 28 },
  //   ],
  //   otherState: 'Some text here',
  //   showPersons: false,
  // }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = { ...this.state.persons[personIndex] }
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons })
  }

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons })
  }

  loginHandler = () => {
    const auth = this.state.auth
    this.setState({ auth: !auth })
  }

  render() {
    console.log('[app.js] at Render')
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showPersons: true })
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonsHandler}
        />
        <AuthContext.Provider value={this.state.auth}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    )
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, "Hello, I'm React"),
    // )
  }
}

export default withClass(App, classes.App)
