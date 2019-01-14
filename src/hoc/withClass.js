import React, { Component } from 'react'
//
// const withClass = props => (
//   <div className={props.classes}>{props.children}</div>
// )
//
// export default withClass

// const withClass = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   )
// }

const withClass = (WrappedComponent, className) => {
  const WithClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} ref={this.props.forwarderdRef} />
        </div>
      )
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwarderdRef={ref} />
  })
}

export default withClass
