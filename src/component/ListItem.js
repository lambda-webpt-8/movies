import React, {Component} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import images from '../images';


// function rating(){
//   const stars = [];
//   for(var i=0; i<{...this.props.rating}; i++){
//     stars.push(i);
//   }
//   console.log(stars);
// }
// rating();
// console.log(this.props.rating)
 const Star = () => (
      // console.log(stars);
  <div>
    {/* <FontAwesomeIcon icon="star" className='star' /> */}
    <p>i</p>
  </div>
)



// Food = return Array.from({length: this.props.rating}, ({this.props.rating}, index) => 
//   <FontAwesomeIcon icon="star" key={index}/>
// );


export default class ListItem extends Component {

  render() {
   
    let stars = []
    // console.log(this.props.rating);
    for(var i=0; i<this.props.rating/2; i++){
      stars.push(i);
    }

    const myObj = { ...this.props.bestPhoto };
    let photo = myObj.prefix + '100x100' + myObj.suffix;
    // if (typeof myObj.prefix === 'string' || myObj.prefix instanceof String){
    //   console.log('string');
    //   // photo = "https://images.pexels.com/photos/1267323/pexels-photo-1267323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100"
    // }else
    if(typeof myObj.prefix === undefined || myObj.prefix === undefined){
      // console.log('undefined');
      photo = require('../images/beer.png');
    }

    return (
      <div className='details'>
      <li 
        aria-labelledby={this.props.name}
        role={'contentinfo'}
        tabIndex={0}
        >

        <img className='details-photo' src={photo} alt={this.props.name}/>
        <div className='details-details'>
          <p className="details-name">{this.props.name}</p>
          <p className="details-address">{this.props.location.formattedAddress[0]}</p>
          <div className='rating'>  
            {stars.map((numStar, idx) => (
              <Star key={idx}/>
            ))
            }
          </div>          
        </div>
      </li>
      </div>//enclosing tag
    );
  }
}


