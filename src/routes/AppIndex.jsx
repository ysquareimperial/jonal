import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Sidebar from "../components/Sidebar";
export default function AppIndex() {
  return (
    <Row className="m-0">
      <Col md={2} className="p-0 m-0">
        <Sidebar />
        {/* fasfds */}
      </Col>
      <Col md={10}>
        <Outlet />
      </Col>
      {/* <Col md={1}>dfasdf</Col> */}
    </Row>
  );
}
