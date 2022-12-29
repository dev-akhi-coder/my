import React from 'react'
import "./product.css"
import Featurepdc from '../reusable/Featurepdc'
export const Product = () => {
  return (
    <div className="features">
        <div className="container">
            <div className="features-heading">
                <p>Features</p>
                <h2>
                    Design that solves  
                </h2>
                <h2>
                    problems, one product at
                </h2>
                <h2>
                    a time
                </h2>
            </div>
            <div className="fetures-card">
                <Featurepdc heading ="Uses Client First" icon="fa-solid icon-item fa-people-roof"/>
                <Featurepdc heading ="Two Free Revision Round" icon="fa-solid icon-item fa-circle-check"/>
                <Featurepdc heading ="Template Customization" icon="fa-solid icon-item fa-pen-ruler"/>
                <Featurepdc heading ="24/7 Support" icon="fa-solid icon-item fa-comments-dollar"/>
                <Featurepdc heading ="Quick Delivery" icon="fa-solid icon-item fa-stopwatch"/>
                <Featurepdc heading ="Hands-on approach" icon="fa-regular icon-item fa-note-sticky"/>
            </div>
        </div>
    </div>
  )
}
export default Product