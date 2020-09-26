import React from "react";
import { Container, Col } from "react-bootstrap";
import CardDetails from "../components/CardDetails.js";
import card1 from "../images/discb.jpg";
import card2 from "../images/dscc.png";
import card3 from "../images/boa.jpg";
import card4 from "../images/dis.png";
import card5 from "../images/c1pc.png";
import card6 from "../images/osvc.png";
import card1Review from '../images/discoverit.png';
import card1apr from '../images/discoverit2.png';
import card2Review from '../images/chromecard.png';
import card2apr from '../images/chromecard2.png';
import card3Review from '../images/bofa.png';
import card3apr from '../images/bofa2.png';
import card4Review from '../images/fourth.png';
import card4apr from '../images/fourth2.png';
import card5Review from '../images/discoverit.png';
import card5apr from '../images/fourth2.png';
import card6Review from '../images/discoverit.png';
import card6apr from '../images/six2.png';


const CreditCards = () => {
  return (
    <Container>
      <h1 style={{ color: "green" }}>
            <b>Start Building Your Credit Now!</b>
          </h1>
          <h1 style={{ color: "#39B54A" }}>Great Student Cards</h1>
      <Col md={{ offset: 0 }}>
        <div>
          <CardDetails
            title={"Discover it Student Card"}
            annualFee="$0"
            description="5% cash back in rotating categories and 1% on everything else. 
                    Cash back match for the first year!"
            url="https://www.discover.com/credit-cards/student/it-card.html"
            image={card1}
            reviews={card1Review}
            apr={card1apr}
          ></CardDetails>
          <span>&nbsp;&nbsp;</span>
          <CardDetails
            title={"Discover it Student Chrome Card"}
            annualFee="$0"
            description="2% cash back at gas stations and restaurants and 1% everywhere else. 
                    Cash back match for the first year!"
            url="https://www.discover.com/credit-cards/student/chrome-card.html"
            image={card2}
            reviews={card2Review}
            apr={card2apr}
          ></CardDetails>
          <span>&nbsp;&nbsp;</span>
          <CardDetails
            title="Bank of America Cash Rewards Credit Card for Students"
            annualFee="$0"
            description="3% cash back in the category of your choice: gas, online shopping, dining, travel, drug stores,
                    or home improvement/furnishings. 2% cash back at grocery stores and wholesale
                    clubs. 1% cash back on all other purchases"
            url="https://www.bankofamerica.com/credit-cards/products/student-cash-back-credit-card/"
            image={card3}
            reviews={card3Review}
            apr={card3apr}
          ></CardDetails>
          <span>&nbsp;&nbsp;</span>
        </div>
      </Col>
      <h1 style={{ color: "#39B54A" }}>
        Great Cards for Bad/Limited/No Credit
      </h1>
      <Col md={{ offset: 0 }}>
        <div>
          <CardDetails
            title={"Discover it Secured"}
            annualFee="$0"
            description="2% cash back at gas stations and restaurants and 1% everywhere else. 
                    Cash back match for the first year!"
            url="https://www.discover.com/credit-cards/secured/"
            image={card4}
            reviews={card4Review}
            apr={card4apr}
          ></CardDetails>
          <span>&nbsp;&nbsp;</span>
          <CardDetails
            title={"Capital One Platinum Card"}
            annualFee="$0"
            description="No cash back, but it provides travel accident insurance if you book your fare with the card"
            url="https://www.capitalone.com/credit-cards/platinum/"
            image={card5}
            reviews={card5Review}
            apr={card5apr}
          ></CardDetails>
          <span>&nbsp;&nbsp;</span>
          <CardDetails
            title={"OpenSky Secured Visa Card"}
            annualFee="$35"
            description="No Credit Check"
            url="https://apply.openskycc.com/fb2/?NID=1864&SID=google_1-1&gclid=Cj0KCQjwzbv7BRDIARIsAM-A6-1AHmIBfSOU31t0K-6XllE36kiCnhTr3lxbWt2GUXB_NIsaPWPH05QaAnyLEALw_wcB"
            image={card6}
            reviews={card6Review}
            apr={card6apr}
          ></CardDetails>
          <span>&nbsp;&nbsp;</span>
        </div>
      </Col>
    </Container>
  );
};

export default CreditCards;
