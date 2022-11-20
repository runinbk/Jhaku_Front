import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavbarComponent() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">JHAKU</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Jhaku - Panaderia
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Usuarios"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Gestionar Usuario
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Gestionar Personal
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <NavDropdown
                    title="Ventas"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Gestionar Cliente
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Gestionar Producto
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action5">
                      Gestionar Venta
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Inventario"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Gestionar Proveedor
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Almacen</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Gestionar Compra
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Produccion"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Gestionar Produccion
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Gestionar Pedido
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Datos adicionales
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Button variant="outline-success">LogOut</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;
