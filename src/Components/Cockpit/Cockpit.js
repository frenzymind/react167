import React from 'react'
import classes from './Cockpit.css'
import Aux from '../../hoc/Auxiliary'

const cockpit = props => {
  const assignedClasses = []
  let btnClass = classes.Button

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ')
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    //<div className={classes.Cockpit}>
    <Aux>
      <h1> {props.appTitle} </h1>
      <p className={assignedClasses.join(' ')}>Im working, dont worry!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
      <button onClick={props.login}>Log in</button>
    </Aux>
    //</div>
  )
}

export default React.memo(cockpit)
