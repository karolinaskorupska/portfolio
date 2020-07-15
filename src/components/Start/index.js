import React from "react";
import { Container, Row, Col } from "react-grid-system";
// import { Link } from "react-router-dom";
import "../Start/start.scss";
import Menu from "../Menu";

import HamburgerMenu from "../HamburgerMenu";
import ArrowRight from "../ArrowRight";

const Start = () => (
  <div className="Start">
    <Row>
      <Col
        xl={4}
        offset={{ xl: 7, lg: 7, md: 7, sm: 7, xs: 7 }}
        lg={4}
        md={4}
        sm={4}
        xs={4}
      >
        <div className="name">
          {/* <img src=""></img> */}
          <h1>Karolina Skorupska</h1>
        </div>
      </Col>
    </Row>
    <Row >
      <Col xl={11} lg={11} md={11} >
        <div className="menuAndHamburger">
          <Menu />
          <HamburgerMenu />
        </div>
      </Col>
    </Row>
    <Row justify="end" style={{ height: "70px" }}>
      <Col
        xl={2.5}
        offset={{ xl: 8, lg: 8, md: 8, sm: 8, xs: 8 }}
        lg={2.5}
        md={2.5}
        sm={2.5}
        xs={2.5}
      >
        <ArrowRight />
      </Col>
    </Row>
  </div>
);

export default Start;
