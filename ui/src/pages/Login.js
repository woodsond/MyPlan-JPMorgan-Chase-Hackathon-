import React from "react";
import { Button, Card } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className={"animate__animated animate__zoomIn container"}>
      <div className={"row"} style={{ height: "25vh" }} />
      <div className={"row"}>
        <div className={"col"} />
        <div className={"col-6 my-auto"}>
          <Card className={"text-center"}>
            <Card.Header className={"h1"}>My Path</Card.Header>
            <Card.Body>
              <form>
                <div className={"container"}>
                  <div className={"row"}>
                    <div className={"col"}>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        value={username}
                        placeholder="Enter username"
                      />
                    </div>
                  </div>
                  <div className={"row pt-4"}>
                    <div className={"col"}>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        value={password}
                        placeholder="Enter password"
                      />
                    </div>
                  </div>
                  <div className={"row pt-4"}>
                    <div className={"col"}>
                      <Button variant="primary">Login</Button>
                    </div>
                  </div>
                </div>
              </form>
            </Card.Body>
            <Card.Footer className="text-muted">Created by Team 14</Card.Footer>
          </Card>
        </div>
        <div className={"col"} />
      </div>
    </div>
  );
};

export default Login;
