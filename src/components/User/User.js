import React, { useState, useEffect, useContext } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import { ComponentRegistryContext } from "../../context"

//SCSS imports
import "./User.scss";

export default function User(props) {
  const { containerProps } = useContext(ComponentRegistryContext);

  return (
    <Container fluid className="text-center pt-1 ">
        <Row className="m-x0">
          <Col md={12}><h1>You are on {containerProps.pageName } Page</h1>
          </Col>
          <Col md={12}>
          <Button variant="dark" onClick={containerProps.getConsoleLog}>
            Click
          </Button>
          </Col>
          </Row>

     </Container>
  );
}
