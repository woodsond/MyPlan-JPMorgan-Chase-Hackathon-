import React from "react";
import Button from "react-bootstrap/Button";
import saving from "../assets/download.png";

const Home = () => {
  return (
    <div
      className={"container pt-2"}
      style={{ minHeight: "77vh", overflowX: "hidden" }}
    >
      <div className={"row"}>
        <div className={"col"}>
          <div>
            <h2 className="display-4 font-weight-bolder justift-content-center">
              <span style={{ color: "#39B54A" }}>MyPlan</span>
            </h2>
          </div>
          <div style={{ marginTop: "5%" }}>
            <h5>Plan the youth finacial future one step at a time.</h5>
          </div>
          <div style={{ marginTop: "10%" }}>
            <p>
              myPlan helps the youth learn about the world of finance in fun and
              easy ways. Start investing in the future now.
            </p>
          </div>
          <div>
            <Button
              variant="outline-success"
              onClick={(event) => (window.location.href = "/MyPiggy")}
            >
              Start Saving
            </Button>
          </div>
        </div>
        <div className={"col"} style={{ marginBottom: 10 }}>
          <img
            src={saving}
            className="landphoto"
            style={{ width: "50vw" }}
            alt={"Man, woman and school bus."}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
