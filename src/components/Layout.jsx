import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Nav from "./Nav"



const Layout = ({ search, setSearch }) => {
  return (
    <div className="App">
        <Nav search={search} setSearch={setSearch} />
        {/* Remaining components to be displayed */}
        <Outlet /> 

        <Footer />
    </div>
  )
}

export default Layout