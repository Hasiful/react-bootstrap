import { useState } from 'react';
import { Accordion, Alert, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardImg, Carousel, Col, Container, Dropdown, DropdownButton, FloatingLabel, Form, FormLabel, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import './App.css';

function App() {
  
  let [show, setShow] = useState(true)

  return (
    <div className="">
        <Container className='py-5'>

          {/* alert in condition */}

          <Alert show={show}>
              <Alert.Heading>Hello Conditional Alert</Alert.Heading>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                fermentum.
              </p>
              <hr />

              <div className="d-flex justify-content-end">
                <Button variant="outline-success" onClick={() => setShow(false)}>
                  Close me
                </Button>
              </div>
          </Alert>

        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}

          {/* form */}
          <Form className='w-50 m-auto p-4 bg-light my-4 rounded-3'>
             <Row className='gy-3'>
                <Col md={6}>
                    <FormLabel>Enter Your Name:</FormLabel>
                    <Form.Control placeholder='Enter Your Name'></Form.Control>
                </Col>
                <Col md={6}>
                    <FormLabel>Enter Your Email:</FormLabel>
                    <Form.Control placeholder='Enter Your Email'></Form.Control>
                </Col>
                <Col md={6}>
                    <FloatingLabel
                      label="Password"
                    >
                      <Form.Control type='password' placeholder='Enter Your Password'></Form.Control>
                    </FloatingLabel>
                </Col>

                <Col md={6}>
                  <FloatingLabel
                    label="Phone"
                  >
                    <Form.Control type='number' placeholder='Enter Your Email'></Form.Control>
                  </FloatingLabel>

                </Col>
                <Col md={12}>
                    <FormLabel>Enter Your Massage:</FormLabel>
                    <Form.Control as="textarea" placeholder='Enter Your Massage'></Form.Control>
                </Col>

              <Col md={12}>
                <Button className='w-100' variant='success'>Submit Now</Button>
              </Col>
             </Row>
          </Form>

          {/* accordion */}
          <Accordion defaultActiveKey='0'>
                <AccordionItem eventKey='0'>
                    <AccordionHeader>
                        First Accordion
                    </AccordionHeader>
                    <AccordionBody>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro labore architecto dolore, tempore voluptatum enim culpa? Maiores, laudantium fugiat omnis quas illum alias quidem, et a iure magnam, aut ipsam!
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey='1'>
                    <AccordionHeader>
                        Second Accordion
                    </AccordionHeader>
                    <AccordionBody>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro labore architecto dolore, tempore voluptatum enim culpa? Maiores, laudantium fugiat omnis quas illum alias quidem, et a iure magnam, aut ipsam!
                    </AccordionBody>
                </AccordionItem>
          </Accordion>

          {/* alerts */}
          <Alert variant='danger' className='mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione veritatis est sunt officia, recusandae error itaque veniam vitae deserunt placeat ipsa nisi rerum accusantium quae ut, a dolor sequi?
          </Alert>

          {/* badge */}
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing <Badge bg='secondary'>New</Badge></h2>

          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbItem href='./App.js'>Home</BreadcrumbItem>
            <BreadcrumbItem href='./App.js'>About</BreadcrumbItem>
            <BreadcrumbItem href='./App.js' active>Contact</BreadcrumbItem>
          </Breadcrumb>

          {/* button group */}

          <ButtonGroup>
              <Button variant='danger'>Button</Button>
              <Button variant='primary'>Button</Button>
              <Button variant='info'>Button</Button>
          </ButtonGroup>

          <ButtonToolbar className='mt-2'>
              <ButtonGroup>
                <Button variant='danger'>Button</Button>
                <Button variant='primary'>Button</Button>
                <Button variant='info'>Button</Button>
              </ButtonGroup>

              <ButtonGroup className='ms-2'>
                <Button>Button</Button>
                <Button>Button</Button>
                <DropdownButton as={ButtonGroup} title='Dropdown'>
                  <DropdownItem>Dropdown link</DropdownItem>
                  <DropdownItem>Dropdown link</DropdownItem>
                </DropdownButton>
              </ButtonGroup>
          </ButtonToolbar>

          {/* dropdown */}
          <Dropdown>
              <DropdownToggle>
                  Dropdown Button
              </DropdownToggle>
              <DropdownMenu>
                  <DropdownItem>Home</DropdownItem>
                  <DropdownItem>Home</DropdownItem>
              </DropdownMenu>
          </Dropdown>

          {/* button */}

          {/* card */}
          <Row>
            <Col md={3}>
                <Card>
                    <CardImg variant='top' src=''></CardImg>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>

                      <Button variant='outline-info'>Add To Card</Button>
                    </Card.Body>
                </Card>
            </Col>
          </Row>

          {/* button */}
          <Button variant='outline-primary'>Outline</Button>

          {/* carousel */}

        <Carousel>

          <Carousel.Item>
            <img className='w-100' src='https://www.tbdholidays.com/assets/admin/images/64ab92127c8e71688965650.jpg' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className='w-100' src='https://www.tbdholidays.com/assets/admin/images/64ab92127c8e71688965650.jpg' />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className='w-100' src='https://www.tbdholidays.com/assets/admin/images/64ab92127c8e71688965650.jpg' />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        </Container>

    </div>
  );
}

export default App;
