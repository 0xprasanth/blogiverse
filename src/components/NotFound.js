import { Link } from 'react-router-dom'
import dottedFace from '../asset/dotted-face.svg'

const NotFound = () => {
  return (
    <main className='NotFound'>
      <img width={'20%'} className='sad-face' src={dottedFace} alt="dotted-face-emoji" />
        <h2> 404 Not Found</h2>
        <h4>oops, something went wrong</h4>
        <Link to={"/"}>Visit Homepage</Link>
    </main>
  )
}

export default NotFound