import React from "react"
import {Route} from "react-router-dom"
import Album from './Album'
import "./search.styl"

class Search extends React.Component {
    render() {
        return (
            <div className="music-search">
                Search
                <Route path="/search/search2" component={Album}/>
            </div>
        )
    }
}

export default Search;