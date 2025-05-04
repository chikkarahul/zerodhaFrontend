import React from 'react'

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1>Technology</h1>
        <h3 className="text-muted mt-3 fs-4">Sleek, modern and intvitive trading platforms</h3>
        <p className="fs-5 mt-3">
            check out our{" "}
            <a href=" " style={{textDecoration:"none"}}>
                investment offerings{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
        </p>
      </div>
    </div>
  )
}

export default Hero
