
import React from 'react'

function Pricing() {
    return (
     <div className="container" >
        <div className="row ">
           <div className="col-4 ">
             <h1 className="mb-5 fs-2">Unbeatable pricing</h1>
             <p className="text-muted">We pioneered the concept of discount broking and price transparency in india.Flat fees and no hidden charges.</p>
             <a href="#" style={{textDecoration:"none"}}>See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
           </div>
           <div className="col-2"></div>
           <div className="col-6">
              <div className="row text-center">
                <div className="col border p-2">
                    <h1 className="mb-3
                    ">&#8377;0</h1>
                    <p>Free equity delivery and <br />direct mutual funds</p>
                </div>
                <div className="col border p-2">
                    <h1>&#8377;20</h1>
                    <p>Intraday and F&O</p>
                </div>
              </div>
           </div>

        </div>

     </div>
    );
}

export default Pricing ;