import React, { useState } from "react";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setShowAlert(true);
          setFormData({ nombre: "", email: "", mensaje: "" }); // Limpiar formulario
        } else {
          setError("Error al enviar el formulario.");
        }
      } catch (err) {
        console.error(err);
        setError("Error de conexión con el servidor.");
      }
    }

    setValidated(true);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Contáctanos</h2>

          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              ¡Gracias por contactarnos! Te responderemos pronto.
            </Alert>
          )}

          {error && <Alert variant="danger">{error}</Alert>}

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formNombre" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingresa tu nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa tu nombre.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un correo válido.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formMensaje" className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                placeholder="Escribe tu mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Por favor escribe tu mensaje.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
