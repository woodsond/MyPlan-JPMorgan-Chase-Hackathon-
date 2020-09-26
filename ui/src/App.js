import React from "react";
import "./App.css";
import CustomNavBar from "./components/customNavBar";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Piggy from "./pages/Piggy";
import Articles from "./pages/Articles"
import CreditCards from "./pages/CreditCards"

function App() {
  return (
    <Router>
    <div className="Options">
      <CustomNavBar />
      <Route path="/MyPiggy" render={() => {
        return (
          <>
            <Piggy title={"MyPiggy"}/>
          </>
        )
      }} />
      <Route path="/Articles" render={() => {
        return (
          <>
            <Articles title={"Financial Articles"}/>
          </>
        )
      }} />
      <Route path="/CreditCards" render={() => {
        return (
          <>
            <CreditCards title={"Credit Cards"}/>
          </>
        )
      }}/>
    </div>
    </Router>
  );
}

export default App;
