import React, { Component } from 'react';

import Photo from './Photo';
import NotFound from './NotFound';

class Gallery extends Component {
  
  render(){
  
    let imgs;
    if (this.props.loading){
      return <p>Loading...</p>    
      
    } else if(this.props.data.length > 0){
    
      imgs = this.props.data.map((img) => {      
      // let { id, farmID, serverID, secret } = img
      // Object destruction doesnt work in this circumstance
        let id = img.id; 
        let farmID = img.farm;
        let serverID = img.server;
        let secret = img.secret;
        
        return <Photo url={`https://farm${farmID}.staticflickr.com/${serverID}/${id}_${secret}.jpg`} data={img} key={id} />     
      });

    } else {
      
      return <NotFound />
    }

    return (
      <div className="photo-container">
        <h3>Results of {this.props.query}</h3>
        <ul>        
          { imgs }
        </ul>
  
      </div>
    );
  }
}

export default Gallery;



