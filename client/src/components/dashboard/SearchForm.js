import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchRooms} from '../../store/actions/dashboard'

class SearchForm extends Component{
    componentDidMount(){
        this.props.searchRooms("")
    }

    handleSearch(event){
        event.preventDefault()
        let query = document.getElementById('searchRooms').value
        this.props.searchRooms(query)
    }

    render(){
        return (
            <form className="form my-3">
                <div className="row">
                    <div className="col-10"><input type="text" className="form-control shadow" id="searchRooms" placeholder="Search Room"/></div>
                    <div className="col-2"><button type="submit" className="btn btn-light mb-2 btn-block shadow" onClick={this.handleSearch.bind(this)}>Search</button></div>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        searchRooms: function(query){
            dispatch(searchRooms(query))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchForm)
