import React from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { apiUrl } from "../index";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async () => {
    const result = await axios({
      method: "POST",
      url: `${apiUrl}/login`,
      data: {
        username,
        password,
      },
    });
    if (result.data.login === "success") {
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("username", result.data.username);
      window.location.reload();
    }
  };

  return (
    <div className={"animate__animated animate__zoomIn container"}>
      <div className={"row"} style={{ height: "25vh" }} />
      <div className={"row"}>
        <div className={"col"} />
        <div className={"col-6 my-auto"}>
          <Card className={"text-center"}>
            <Card.Header className={"h1"}>
              <i className={"fas fa-piggy-bank pr-2"} />
              MyPath
            </Card.Header>
            <Card.Body>
              <div className={"container"}>
                <div className={"row"}>
                  <div className={"col"}>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                <div className={"row pt-4"}>
                  <div className={"col"}>
                    <Button
                      type="submit"
                      variant="primary"
                      style={{ width: "35%" }}
                      onClick={handleSubmit}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </div>
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
