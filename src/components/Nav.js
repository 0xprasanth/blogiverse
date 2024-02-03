import React from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';
import logo from '../asset/github-mark-white.svg'

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
    </nav>
      <ul className='pagenition'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/post'}>Post</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        {/*         <a href="http://github.com/ptech12/blogiverse" target="_blank" rel="noopener noreferrer"
        >
          
        </a> */}
        <li className='github'>
          <Link to={"http://github.com/ptech12/blogiverse"} target='_blank' rel='noopener noreferrer'>
             <img src={logo} style={{ width: '20%' }}/>
          </Link>
        </li>
      </ul>
    
    </>
    
  )
}

export default Nav