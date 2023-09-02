// src/ImcCalculator.js
import { useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Alert,
  Table,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MainBmi.css";

const ImcCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setImc] = useState(null);

  const calculateImc = () => {
    if (!weight || !height) {
      toast.error("Por favor, ingresa tu peso y altura.");
      return;
    }

    const heightInMeters = height / 100;
    const calculatedImc = weight / (heightInMeters * heightInMeters);
    setImc(calculatedImc);

    let message = "";

    if (calculatedImc < 18.5) {
      message = "Bajo peso";
    } else if (calculatedImc < 24.9) {
      message = "Peso saludable";
    } else if (calculatedImc < 29.9) {
      message = "Sobrepeso";
    } else {
      message = "Obesidad";
    }

    toast.success(`Tu IMC es ${calculatedImc.toFixed(1)}. Tienes: ${message}.`);
  };

  return (
    <Container fluid className="imc-container container">
      <h1 className="my-4">Calcula tu IMC</h1>
      <Row>
        <Col xs={12} md={6}>
          <div>
            <h2>Tu IMC</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>IMC</th>
                  <th>Estado de peso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Abajo 18.5</b>
                  </td>
                  <td>Bajo peso</td>
                </tr>
                <tr>
                  <td>18.5 - 24.9</td>
                  <td>Saludable</td>
                </tr>
                <tr>
                  <td>25.0 - 29.9</td>
                  <td>Exceso de peso</td>
                </tr>
                <tr>
                  <td>30.0 - y por encima</td>
                  <td>Obeso</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId="weight">
              <Form.Label>Peso (kg)</Form.Label>
              <Form.Control
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="height">
              <Form.Label>Altura (cm)</Form.Label>
              <Form.Control
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Form.Group>
            <Button className="mt-4" variant="primary" onClick={calculateImc}>
              Calcular IMC
            </Button>
          </Form>
          {imc !== null && (
            <Alert
              className="mt-3"
              variant={
                imc < 18.5
                  ? "danger"
                  : imc < 24.9
                  ? "success"
                  : imc < 29.9
                  ? "warning"
                  : "danger"
              }
            >
              <h4>Tu IMC: {imc.toFixed(1)}</h4>
              <p>
                {imc < 18.5
                  ? "Tienes bajo peso. Considera ganar peso de manera saludable."
                  : imc < 24.9
                  ? "Tienes un peso saludable. ¡Sigue así!"
                  : imc < 29.9
                  ? "Tienes sobrepeso. Enfócate en una dieta equilibrada y el ejercicio."
                  : "Tienes obesidad. Consulta a un profesional de la salud para obtener orientación."}
              </p>
            </Alert>
          )}
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ImcCalculator;
