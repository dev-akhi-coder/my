import React from 'react'

function WorkReusable({title,pera,img}) {
  return (
    <div>
        <div className="card-1">
            <img src={img} alt=""/>
            <h5>{title}</h5>
            <p>{pera}</p>
        </div>
    </div>
  )
}

export default WorkReusable