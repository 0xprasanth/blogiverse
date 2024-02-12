import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Nav from "./Nav"



const Layout = ({ width, search, setSearch, postsCount }) => {
  return (
    <div className="App">
        <Nav width={width} search={search} setSearch={setSearch} />
        {/* Remaining components to be displayed */}
        <Outlet /> 

        <Footer postsCount={postsCount}/>
    </div>
  )
}

export default Layout