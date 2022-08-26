import React, { useState } from "react";
import { Card, InputGroup, Button } from "react-bootstrap";
import uuid from "react-uuid";
import CreateTask from "../CreateTask";
import ListTask from "../ListTask";

export default function Dashboard() {
  const [task, setTask] = useState("");
  const [item, setItem] = useState([]);
  const [isCreate, setIsCreate] = useState(false);

  const onInsertItem = () => {
    const new_items = {
      id: uuid(),
      name: task,
      done: false,
      elapsed: 5456099,
      runningSince: Date.now(),
    };
    setItem([new_items, ...item]);
  };
  return (
    <div>
      <Card style={{ width: "600px", color: "#000" }} className="mb-3">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Card</Card.Subtitle>
          <Button onClick={() => setIsCreate(true)}>Create Task</Button>
          <InputGroup className="mb-3">
            {isCreate && (
              <CreateTask
                onInsertItem={onInsertItem}
                task={task}
                setTask={setTask}
              />
            )}
          </InputGroup>
          <ListTask item={item} />
        </Card.Body>
      </Card>
    </div>
  );
}
