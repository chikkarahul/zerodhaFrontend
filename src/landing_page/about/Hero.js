import React from "react";

function Hero() {
  return (
    <div ClassName="container">
      <div className="row p-5 mb-5 mt-5">
        <h1 className=" d-block fs-4 text-center">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6">
          <p style={{ lineHeight: "1.7" }}>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
            <br /> Today, our disruptive pricing models and in-house technology
            have made us the biggest stock broker in India.
            <br /> Over 1.6+ crore clients place billions of orders every year
            through our powerful ecosystem of investment platforms, contributing
            over 15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            <br />
            <a href="/#" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>{" "}
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
            <br /> And yet, we are always up to something new every day. Catch
            up on the latest updates on our blog or see what the media is saying
            about us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
      <div className="row p-5 mb-5 mt-5 border-top">
        <h1 className=" d-block fs-4 text-center">People</h1>
      </div>
      <div className="row mt-5 mb-5 p-5  text-muted">
        <div className="col-6 p-5 text-center">
          <img
            src="Media/images/nithinKamath.jpg"
            alt=""
            className="rounded-circle" style={{width:"60%"}}
          />
          <h4 className="mt-5">Nithinkamath</h4>
          <h6>Founder,CEO</h6>
        </div>
        <div className="col-6 ">
          <p style={{lineHeight:"2em"}}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.<p>He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).</p> <p>
            laying basketball is
            his zen. Connect on <a href=" " className="text-decoration-none">Homepage</a> / <a href=" " className="text-decoration-none">TradingQnA</a> / <a href=" " className="text-decoration-none">Twitter</a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
