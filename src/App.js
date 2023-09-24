import { Accordion, Alert, Button, Col, Container, FloatingLabel, Form, FormLabel, Row } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import './App.css';

function App() {
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

        <Accordion defaultActiveKey={['1', '0']}>
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
        
        <Alert variant='danger' className='mt-5'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione veritatis est sunt officia, recusandae error itaque veniam vitae deserunt placeat ipsa nisi rerum accusantium quae ut, a dolor sequi?
        </Alert>

        </Container>

    </div>
  );
}

export default App;
