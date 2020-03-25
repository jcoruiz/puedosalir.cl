import React, { useState } from "react";
import "./App.css";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import ReactGA from "react-ga";
ReactGA.initialize("G-M48CXR6JD1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <content className="App-content">
        <span className="textNo">No.</span>

        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              Puedo salir entrega recomendaciones personalizadas de acuerdo a tu
              ubicación geográfica frente al coronavirus. <br></br>Recuerda
              siempre #lavarteLasManos
            </CardBody>
          </Card>
        </Collapse>
        <div className="footer">
          <Button
            color="secondary"
            onClick={toggle}
            style={{ marginBottom: "1rem" }}
          >
            ¿Cómo funciona?
          </Button>
        </div>
      </content>
    </div>
  );
}

export default App;
