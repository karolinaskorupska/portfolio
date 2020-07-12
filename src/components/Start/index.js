import React from "react";
import { Container, Row, Col } from "react-grid-system";
// import { Link } from "react-router-dom";
import "../Start/start.scss";

import HamburgerMenu from "../HamburgerMenu";
import ArrowRight from "../ArrowRight";

const Start = () => (
  <div className="Start">
    <Row>
      <Col xl={4} offset={{ xl: 7, lg: 7, md: 7 }} lg={4} md={4}>
        <div className="name">
          {/* <img src=""></img> */}
          <h1>Karolina Skorupska</h1>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xl={4} offset={{ xl: 7, lg: 7, md: 7 }} lg={4} md={4}>
        <HamburgerMenu />
      </Col>
    </Row>
    <Row  justify="end" style={{ height: '200px' }} >
      <Col xl={3} offset={{ xl: 7, lg: 7, md: 7 }} lg={3} md={4}>
        <ArrowRight />
      </Col>
    </Row>
  </div>
);

export default Start;
