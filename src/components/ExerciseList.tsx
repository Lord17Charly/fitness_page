import React, { useEffect, useState } from "react";
import { Spinner, Card, Row, Col, Container, Alert } from "react-bootstrap";

// Función para consumir la API
const fetchExercises = async () => {
  try {
    const response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "556addc85amsh552af7ded0e1266p1c5e1ejsn69f1a26a2c6a",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching exercises");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExercises = async () => {
      try {
        const data = await fetchExercises();
        setExercises(data);
      } catch (error) {
        setError("Error fetching exercises.");
      } finally {
        setLoading(false);
      }
    };
    loadExercises();
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {exercises.map((exercise: any) => (
          <Col key={exercise.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={exercise.gifUrl} />
              <Card.Body>
                <Card.Title className="fw-bold">{exercise.name}</Card.Title>
                <Card.Text>
                  <strong>Target:</strong> {exercise.target}
                  <br />
                  <strong>Equipment:</strong> {exercise.equipment}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExerciseList;
