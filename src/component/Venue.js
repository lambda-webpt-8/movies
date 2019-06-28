import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Venue extends Component {

  render() {
  const venue = this.props.location.state.venues;

    // console.log(venue.bestPhoto)

    const myObj = { ...this.props.location.state.venues.bestPhoto };
    let photo = myObj.prefix + '1100x1100' + myObj.suffix;
    // if (typeof myObj.prefix === 'string' || myObj.prefix instanceof String) {
    //   console.log('string');
    //   // photo = "https://images.pexels.com/photos/1267323/pexels-photo-1267323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100"
    // } else 
    if (typeof myObj.prefix === undefined || myObj.prefix === undefined) {
      // console.log('undefined');
      photo = require('../images/beer.png');
    }


  function OpenClosed () {
    // const myHours = { ...this.props.location.state.venues.hours.isOpen };
    if(typeof venue.hours === undefined || venue.hours === undefined){
      return (
        <div className='closed'>hours unlisted</div>
      )
    }else if(venue.hours.isOpen === false){
      return(
        <div className='closed'>{venue.hours.status}</div>
      )
    }else{
      return(
      <div className='open'>{venue.hours.status}</div>
      )
    }
}


    return (

      <div>
        <div className='nav'>
          <Link
              onClick={() => this.props.handleHomeClick()}
              to='/'
          >
              Home 
          </Link> / {venue.name}
        </div>  

        <div className='hero'>
          <div className='hero-text'>
            <h2>{venue.name}</h2>
          </div>
          <img alt={venue.name} src={photo} />        
        </div>
        {/* <div className='open'>
              {hours}
        </div>   */}
        <OpenClosed />
        <div className='address'>
         {venue.location.formattedAddress[0]} , {venue.location.formattedAddress[1]}
        </div>

        <div className='description'>
        {venue.description}
        </div>

        

      </div>

    );
  }
}
export default Venue;