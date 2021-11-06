import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const DetailsCard = ({ user, closeClicked }) => {
  return (
    <Card className="detailCard">
      <Row>
        <Col md={9} xs={8}>
          <Card.Body className="cardBody">
            <Card.Title>User Details</Card.Title>
            <Card.Text>
              <strong>Name: </strong>
              {user.name}
              <br />
              <strong>Phone: </strong>
              {user.phone}
              <br />
              <strong>Street Address: </strong>
              {user.address.street}
            </Card.Text>
          </Card.Body>
        </Col>
        <Col md={3} xs={4} style={{ paddingTop: "10px", paddingLeft: "35px" }}>
          <Button variant="outline-secondary" onClick={closeClicked}>
            X
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default DetailsCard;
