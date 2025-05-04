import React from 'react'

function Rightimage({imageURL,productName,productDescription,learnMore}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 p-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <a href={learnMore} className="text-decoration-none">learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className="col-6 ps-5 ">
            <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Rightimage
