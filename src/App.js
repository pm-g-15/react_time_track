import "./App.css";
import Dashboard from "./components/Dashboard";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
