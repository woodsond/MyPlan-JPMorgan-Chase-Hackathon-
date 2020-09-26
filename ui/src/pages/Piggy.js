import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Cards from "../components/DashboardCard";

class Piggy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetAmount: 10000,
      currentAmount: 2000,
      currentMonth: 200,
      monthGoal: 500,
      cardSpending: {
        title: "Spending By Month",
      },
      cardHistory: {
        title: "Transaction History",
      },
    };
  }

  render() {
    return (
      <div
        className={"container pt-2"}
        style={{ minHeight: "77vh", overflowX: "hidden" }}
      >
        <div>
          <h2 className="display-4 font-weight-bolder justift-content-center">
            <span style={{ color: "#39B54A" }}>MyPiggy</span>
          </h2>
        </div>
        <div style={{ marginLeft: "5%" }}>
          <h4>Current Savings: ${this.state.currentAmount}</h4>
        </div>
        <div style={{ maxWidth: "90%", marginLeft: "5%" }}>
          <ProgressBar
            striped
            variant="success"
            now={(this.state.currentAmount / this.state.targetAmount) * 100}
          />
        </div>
        <div style={{ marginLeft: "5%", marginTop: "3%" }}>
          <h5>
            <span style={{ color: "#E0AD2E" }}>Monthly Goal: </span> $
            {this.state.currentMonth} / ${this.state.monthGoal}
          </h5>
        </div>
        <Container fluid={true} style={{ marginTop: "5%", maxWidth: "95%" }}>
          <Row>
            <Column lg>
              <Cards title={this.state.cardSpending.title} />
            </Column>
            <Column lg>
              <Cards title={this.state.cardHistory.title} />
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Piggy;
