import React from 'react'


const Footer = ({ postsCount }) => {

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