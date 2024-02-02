import React from 'react'

const Footer = ({ postsCount }) => {
  return (
    <footer>
        <h3>
          {postsCount} Posts 
        </h3>
    </footer>
  )
}

export default Footer