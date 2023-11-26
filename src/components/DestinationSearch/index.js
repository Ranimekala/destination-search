import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchUserInput = event => this.setState({searchInput:event.target.value})

  render() {
      const {searchInput} = this.state

      const {destinationsList} = this.props

      const searchResults = destinationsList.filter(eachDestination => {
          eachDestination.name.toLowerCase().includes(searchInput.toLowerCase())
          

        return (

        <div className="bg-container">
            <div className="search-container">
            <h1 className="heading">Destination Search</h1>
            <div className="container">
                <input type="search"
                    className="input"
                    placeholder="Search"
                    value={searchInput}
                    onChange = {this.onChangeSearchInput}
                />
                <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search-icon"
                className="search" /> 
                </div>
                <ul className="list">
                    {searchResults.map(eachDestination => (
                    <DestinationItem destinationItem = {eachDestination} key = {eachDestination.id}/>
                    ))}
                </ul>
            </div>
        </div>
    )
  }
}

export default DestinationSearch
