import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card, Col, Row } from "reactstrap";

function App() {
  const [count, setCount] = useState(0);
  const smallCards = [{}];
  return (
    <div className="body_">
      <Row className="m-0">
        <Col md={2}>vzcx</Col>
        <Col md={9}>
          <div className="mt-5">
            <h3>Hi Abubakar👋</h3>
            <Row>
              <Col md={8}>
                <p>
                  Get a summary overview of today's trades at with more insight.
                </p>
              </Col>
              <Col md={4}>
                <p style={{ textAlign: "right" }}>Trading Reminders</p>
              </Col>
            </Row>
          </div>

          <Row className="mt-3">
            <Col md={8} className="">
              <Card className="dashboard_card _firstcards p-4">
                <div className="text-center">
                  <p className="m-0">
                    <b>Lesson learned!</b> Today you took a loss of{" "}
                    <b className="loss"> -$13.56</b>
                  </p>
                  <p>bringing your balance to</p>
                  <p className="blnc">$15,000</p>
                  <div className="_fdfd">
                    <p className="m-0 pcnt">-0.0434%</p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="">
              <Card className="dashboard_card _firstcards p-4">
                <div>
                  <p className="m-0 text-center">Trader status</p>

                  <Row className="mt-3">
                    <Col md={5}>
                      <p>Max loss</p>
                      <p>Profit target</p>
                      <p>Available risk</p>
                    </Col>
                    <Col md={7}>
                      <p>
                        <b>-$13.56</b> / $234.54
                      </p>
                      <p>
                        <b>-$13.56</b> / $234.54
                      </p>{" "}
                      <p>
                        <b>-$13.56</b> / $234.54
                      </p>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={4}>
              <Card className="secondcards p-4">
                <Row>
                  <Col md={6} className="text-center">
                    <h4>4</h4>
                    <p className="m-0">Trades</p>
                  </Col>
                  <Col md={6}>
                    <div className="text-secondary" style={{ float: "right" }}>
                      <p className="m">O trades won</p>
                      <p className="m-0">3 trades loss</p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="secondcards p-4">
                <Row>
                  <Col md={6} className="text-center">
                    <h4>4</h4>
                    <p className="m-0">Trades</p>
                  </Col>
                  <Col md={6}>
                    <div className="text-secondary" style={{ float: "right" }}>
                      <p className="m">O trades won</p>
                      <p className="m-0">3 trades loss</p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="secondcards p-4">
                <Row>
                  <Col md={6} className="text-center">
                    <h4>4</h4>
                    <p className="m-0">Trades</p>
                  </Col>
                  <Col md={6}>
                    <div className="text-secondary" style={{ float: "right" }}>
                      <p className="m">O trades won</p>
                      <p className="m-0">3 trades loss</p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          {/* ///////////////////////////////////////////////////////////////// */}

          <Row className="mt-4">
            <Col md={4}>
              <Card className="secondcards p-4">
              <p className="dash_cards_title">Win Rate</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="secondcards p-4">
                <p className="dash_cards_title">Risk Meter</p>

                <p>
                  -0.19 <span>%</span>
                </p>
                <p>Used</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="secondcards p-4">
                <div className="d-flex justify-content-between">
                  <p className="dash_cards_title">Trader Type</p>
                  <button className="bull_bnt">Bull</button>
                </div>
              </Card>
            </Col>
          </Row>

          {/* ///////////////////////////////////////////////////////// */}

          <Row className="mt-4">
            <Col md={4}>
              <Card className="secondcards p-4">
              <p className="dash_cards_title">Avg Loss</p>
                <p className="m-0" style={{ fontWeight: "bold", fontSize: 20 }}>
                  -0.05%
                </p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="secondcards p-4">
              <p className="dash_cards_title">Highest Balance</p>
                <p className="m-0" style={{ fontWeight: "bold", fontSize: 20 }}>
                  $23.45
                </p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="secondcards p-4">
                <div className="">
                  <p className="dash_cards_title">Lowest Balance</p>
                  <p
                    className="m-0"
                    style={{ fontWeight: "bold", fontSize: 20 }}
                  >
                    $23.45
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
}

export default App;
