import React from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';

const Nav = ({search, setSearch}) => {
  return (
    <>
    <nav className='Nav'>
      <Header title={'blogiverse'}  />
      <form className='searchForm' onSubmit={e => e.preventDefault()}>
        <label htmlFor="search">
          Search Post
        </label>
        {/* Controlled Form input */}
        <input 
          id='search'
          type='text'
          placeholder='Search for Posts'
          value={search}
          onChange={e => setSearch(e.target.value)}
          />

      </form>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
          <Link to={'/post'}>Post</Link>
          <Link to={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
    
    </>
    
  )
}

export default Nav