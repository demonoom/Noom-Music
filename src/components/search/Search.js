import React from "react"
import {Route} from "react-router-dom"
import FFF from './fff'
import "./search.styl"

class Search extends React.Component {
    render() {
        return (
            <div className="music-search">
                Search
                <Route path='/search/search2' component={FFF}/>
            </div>
        )
    }
}

export default Search;