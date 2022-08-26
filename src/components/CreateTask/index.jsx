import React from "react";
import { Form, Button } from "react-bootstrap";

export default function CreateTask({ onInsertItem, task, setTask }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task name.."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={onInsertItem}>
        Create
      </Button>
    </Form>
  );
}
