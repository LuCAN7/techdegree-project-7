import React from 'react';


const Photo = (props) => {

  return (
    <li className="Photo">
      {/* <img src={`https://farm${farmID}.staticflickr.com/${serverID}/${id}_${secret}.jpg`} alt="Search Images" /> */}
      <img src={props.url} alt="Search Images" />
   </li>
  )
}

export default Photo;

