import React from 'react';
import Item from '../Item/Item';



class Listings extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      item: []
    };
  };

  

  componentDidMount(){
    window.getData = (data) => {
      if (data.ok){
        console.log(data);
        this.setState({item: data.results});
      } else {
        console.log(data.error);
      }
    }

    const listings = document.createElement("script");

    listings.src = 'https://openapi.etsy.com/v2/listings/active.js?callback=getData&api_key=u8e1tx1lpum704imovyafr8j';
    listings.async = 'true';

    document.body.appendChild(listings);
  }
  
  render(){
    const {item} = this.state;
    return(
      <div>
        <Item id={item[0]}/>
      </div>
    )
  }
}

export default Listings;