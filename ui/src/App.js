import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNavBar from "./components/customNavBar";
import Articles from "./pages/Articles";
import CreditCards from "./pages/CreditCards";
import Piggy from "./pages/Piggy";
import Login from "./pages/Login";

const App = (props) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null && token !== undefined) {
      if (token.length > 0) {
        setIsAuthenticated(true);
      }
    }
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <Router>
          <div className="Options">
            <CustomNavBar />
            <Route
              path="/MyPiggy"
              render={() => {
                return (
                  <>
                    <Piggy title={"MyPiggy"} />
                  </>
                );
              }}
            />
            <Route
              path="/Articles"
              render={() => {
                return (
                  <>
                    <Articles title={"Financial Articles"} />
                  </>
                );
              }}
            />
            <Route
              path="/CreditCards"
              render={() => {
                return (
                  <>
                    <CreditCards title={"Credit Cards"} />
                  </>
                );
              }}
            />
          </div>
        </Router>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default App;
