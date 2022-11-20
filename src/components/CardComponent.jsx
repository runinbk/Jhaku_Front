import { Card, Col, Row } from "react-bootstrap";

function CardDashboard() {
  return (
    <div
      style={{
        position: "absolute",
        left: "25%",
        transform: "translateX(-50%)",
        display: "flex",
      }}
    >
      <>
        <div
          style={{
            position: "relative",
          }}
        >
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Secondary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            position: "absolute",
          }}
        >
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Success Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            position: "absolute",
          }}
        >
          <Card border="danger" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Danger Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    </div>
  );
}

export default CardDashboard;
