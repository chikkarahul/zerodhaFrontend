import React from 'react'

function Leftimage({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}){
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6 p-5">
        <img src={imageURL} alt="" />
        </div>
        <div className="col-6 p-5 ps-5">
           <h1>{productName}</h1> 
           <p>{productDescription}</p>
           <div className="mb-3" >
           <a href={tryDemo} className="text-decoration-none">Try demo</a>
           <a href={learnMore} className="text-decoration-none" style={{marginLeft:"50px"}}>learnMore</a>
           </div>
           <div>
           <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
           <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="" /></a>
           </div>
           
        </div>
      </div>
    </div>
  )
}

export default Leftimage
