import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Nav from "./Nav"
import { useContext } from "react"
import DataContext from "../context/DataContext"



const Layout = () => {
  const { search, setSearch, searchResults} = useContext(DataContext); 

  return (
    <div className="App">
        <Nav search={search} setSearch={setSearch} />
        {/* Remaining components to be displayed */}
        <Outlet /> 

        <Footer postsCount={searchResults.length}/>
    </div>
  )
}

export default Layout