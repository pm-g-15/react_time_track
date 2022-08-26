import React from "react";
import { ListGroup, Card, Button } from "react-bootstrap";
import { renderElapsedString } from "../../helper/constant";
export default function ListTask({ item }) {
    const elapsedString = renderElapsedString(
        5456099,
        Date.now()
      )
  return (
    <ListGroup variant="flush">
      {item?.length > 0 &&
        item?.map((item) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Title>{elapsedString}</Card.Title>
                <Button variant="success">Start</Button>
                <Button variant="danger">Pause</Button>
                <Button variant="secondary">Save</Button>
              </Card.Body>
            </Card>
          );
        })}
    </ListGroup>
  );
}
