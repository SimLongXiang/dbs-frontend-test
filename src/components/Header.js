import React from 'react'
import './Header.css'

const Header = (props) => {
  const symbol = props.showContent ? '\u2B9D' : '\u2B9F' ;
  return (
    <div className="header-container">
      <p><b>How it works</b></p>
      { !props.mobileView ? null :
        <div data-testid="collapse-btn" className="collapsable" onClick={props.collapse}>{symbol}</div>
      }
    </div>
  )
}

export default Header;
