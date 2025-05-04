import React from 'react'


function Education() {
    return (
        <div className="container" >
        <div className="row ">
           <div className="col-6 ">
             <img src="Media/images/education.svg" alt="" />
           </div>
           
           <div className="col-6 pt-5">
              <div className="row">
                <div className="col p-2">
                    <h1 className="mb-3
                    fs-2">Free and open market education</h1>
                    <p className="text-muted">Varsity,the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#" style={{textDecoration:"none"}}>Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <p className="text-muted mt-5">TradingQ&A,the most active trading and investment community in india for all your market related queries.</p>
                    <a href="#" style={{textDecoration:"none"}}>TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                </div>
              </div>
           </div>

        </div>

     </div>
       

    );
}

export default Education;