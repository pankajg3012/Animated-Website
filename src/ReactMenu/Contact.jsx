import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.css';


const Contact = () => {
  return (
    <>
    <div className="container">
    <h1>Contact Us</h1>
    <Form>
    <fieldset >
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledTextInput">Name</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledTextInput"> Last Name</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="Enter Surname" />
      </Form.Group>
       <Form.Group className="mb-3">
               <Form.Label>Enter Your Email</Form.Label>
               <Form.Control type='email' />
           </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
        <Form.Select id="disabledSelect">
        <option>Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledSelect">City</Form.Label>
        <Form.Select id="disabledSelect">
          <option>Select</option>
          <option>Mumbai</option>
          <option>Pune</option>
          <option>Hyderabad</option>
          <option>Gorakhpur</option>
          <option>Surat</option>
          <option>Prayagraj</option>
          <option>Others</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          id="disabledFieldsetCheck"
          label="Accept Form" className='checkbtn'
        />
      </Form.Group>
      <Button className='btnform' type="submit">Submit</Button>
    
      <Button className='btnform' type="reset">Reset</Button>
    </fieldset>
  </Form>
  </div>
    </>
  )
}

export default Contact