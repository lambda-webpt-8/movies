import React, {Component} from 'react';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

export default class VenueList extends Component {
  render() {
   
    return (
      <ul className="venuList">
        {this.props.venues && 
          this.props.venues.map((venue, idx) => ( 
          <div className="list-item" key={venue.id}>
            <Link
             onClick={() => this.props.handleListItemClick(this.props.venues[idx])}
              to={{
                // pathname: '/brewery',
                pathname: '/venue',
                state: {
                  venues: this.props.venues[idx],
                  markers: this.props.markers,
                  zoom: this.props.zoom
                }
              }}
            >
              <ListItem  
                {...venue}
                {...this.props}
              />
          </Link>
          </div>
          ))}
      </ul>
    );
  }
}