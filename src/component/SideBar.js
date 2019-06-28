import React, {Component} from "react";
import VenueList from "./VenueList";

export default class SideBar extends Component {
  constructor() {
    super();
    // query set to empty string
    this.state = {
      query: '',
      venues: []
    };
  }

// The list items and markers will display only those which match the query
  handleFilterVenues = () => {
    // if query does not equal an empty string
      if(this.state.query.trim() !== '') {
      const venues = this.props.venues.filter(venue =>  
      // toLowerCase so the user can use capital or lowercase in search query
      //str.includes(query) checks the str against the query.toLowerCase
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
      venue.name.toLowerCase().includes(this.state.query.toLowerCase()) +    
      venue.location.formattedAddress[1].toLowerCase().includes(this.state.query.toLowerCase()));
      console.log(venues);
      //returning the venues that match
      return venues;
    }
    // all
     return this.props.venues;
  };

  handleChange = e => {
    this.setState({ query: e.target.value });

    const markers = this.props.venues.map(venue => {
      // toLowerCase so the user can use capital or lowercase in search query
      //str.includes(query) checks the str against the query.toLowerCase
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
      const nameMatched = venue.name
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
      const locationMatched = venue.location.formattedAddress[1]
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      const marker = this.props.markers.find(marker => marker.id === venue.id);
      //if the name or location matched marker is visible
      if(nameMatched || locationMatched) {
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      //returning the markers that match
      return marker;
    });
    //The below is just a reminder for myself since I'm new to React
    // this.props.updateSuperState({markers: Object.assign(this.props.markers, markers)});
    // this.props.updateSuperState({markers: markers});
    this.props.updateSuperState({ markers });
  };

  render() {
    return(
    <div className='sidebar'>
      <input 
        type={'search'}
        id={'search'} 
        placeholder={'Breweries & Locations'}
        onChange={this.handleChange}
        aria-labelledby={'search'}
        tabIndex={0}
        />
      <VenueList 
        {...this.props}
        venues={this.handleFilterVenues()}
        handleListItemClick={this.props.handleListItemClick}
      />
    </div>
    );
  }
}