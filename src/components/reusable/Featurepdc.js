import React from 'react'

function Featurepdc({heading,icon}) {
  return (
    <div className="card-details">
        <div className="card-details-part">
            <i className={icon}></i>
            <h6>{heading}</h6>
            <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. 
            </p>
        </div>
    </div>
  )
}

export default Featurepdc