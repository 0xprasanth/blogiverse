import React from 'react'
import logo from '../asset/github-mark.svg'

const Footer = ({ postsCount }) => {
  const logoStyles = {
    width: '15%',
    // height: '1rem'

  }
  return (
    <footer>
      <div className="footer">

        <h2>
          {postsCount} Posts 
        </h2>
        <a href="http://github.com/ptech12/blogiverse" target="_blank" rel="noopener noreferrer"
        >
          <img src={logo} style={logoStyles}/>
        </a>
      </div>
    </footer>
  )
}

export default Footer