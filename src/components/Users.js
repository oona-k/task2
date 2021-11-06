import { React, useEffect, useState } from "react";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";

import axios from "axios";
import DetailsCard from "./DetailsCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const listOfUsers = users.map((u) => (
    <ListGroup.Item
      key={u.id}
      className="userRow"
      onClick={() => setSelectedUser(u)}
    >
      {u.name}
    </ListGroup.Item>
  ));

  const closeClicked = () => {
    setSelectedUser(null);
  };

  return (
    <Container className="container">
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Card className="userListCard">
            <ListGroup variant="flush">{listOfUsers}</ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          {selectedUser !== null ? (
            <DetailsCard
              user={selectedUser}
              closeClicked={() => closeClicked()}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
