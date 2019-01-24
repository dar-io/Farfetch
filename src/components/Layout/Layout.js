import React from 'react'
import './layout.scss'
import 'normalize.css'




export class Layout extends React.Component {
  render() {
    
    const {className, children} = this.props
    return (
      <section className={ `${className}` }>
      {this.props.TestMenu}
        <div className="prototype-wrapper">
          { children } 
        </div>
      </section>
    )
  }
}

export default Layout