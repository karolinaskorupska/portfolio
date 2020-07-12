import React from "react";
import { Container, Row, Col } from "react-grid-system";
// import { Link } from "react-router-dom";
import '../Landing/landing.scss';
import Start from '../Start';


const Landing = () => (
    <Container fluid style={{ margin: 0, padding: 0 }}>
    <div className="Landing">
        <Start />
    </div>
    </Container>
);

export default Landing;

