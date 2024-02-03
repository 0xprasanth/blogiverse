import React from 'react'


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
      </div>
    </footer>
  )
}

export default Footer