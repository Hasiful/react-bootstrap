import { Accordion, Button, Col, Container, FloatingLabel, Form, FormLabel, Row } from 'react-bootstrap';

export function App() {
  return (
    <div className="">
      <Container>
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

        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <Accordion.Button>First Accordion</Accordion.Button>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eligendi vitae atque asperiores consequuntur cumque tenetur dolor vero tempore veniam porro, cum expedita iure perspiciatis quaerat, ea quod eveniet repellat!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              <Accordion.Button>First Accordion</Accordion.Button>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eligendi vitae atque asperiores consequuntur cumque tenetur dolor vero tempore veniam porro, cum expedita iure perspiciatis quaerat, ea quod eveniet repellat!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </Container>

    </div>
  );
}
