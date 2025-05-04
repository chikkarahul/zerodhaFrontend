import React from 'react'

function Hero(){
  return (
    <div className="container mt-5">
    <div className="row text-center">
    <div className="mb-5 pb-5">
    <h1>Charges</h1>
    <p className="text-muted fs-4 pt-3">List of all charges and taxes</p>
    </div>
        
        <div className="col-4 mt-5">
            <img src="media/images/pricing0.svg" alt="" style={{width:"250px"}}/>
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted p-3">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 mt-5">
            <img src="media/images/intradayTrades.svg" alt="" style={{width:"250px"}} />
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p className="text-muted p-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 mt-5">
        <img src="media/images/pricing0.svg" alt="" style={{width:"250px"}} />
        <h1 className="fs-3">Free direct MF</h1>
        <p className="text-muted p-3">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
    </div>
      
    </div>
  )
}

export default Hero
