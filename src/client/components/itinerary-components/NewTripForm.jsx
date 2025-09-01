//import react and react hooks {use state}
import React from 'react';
import { useState } from "react";
//import bootstrap components button and form.
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//make a function takes in prop onAddTrip
function NewTripForm({ onAddTrip }) {
  //initializing state object for form inputs
  // const [formData, setFormData] = useState({
  //   title: '',
  //   start: '',
  //   end: '',
  //   nativeCurrency: '',
  //   foreignCurrency: '',
  //   budget: '',
  // });
  //supposed to update the state with changes from form
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };
  //   const handleSubmit = (e) => {
  // }
  // state for dropdown
  const [nativeCurrency, setNativeCurrency] = useState('USD')
  const [foreignCurrency, setForeignCurrency] = useState('USD')
  // handler for selecting f
  const handleChangeNative = (e) => {
    // console.log(e.target.value);
    setNativeCurrency(e.target.value);
  }
  const handleChangeForeign = (e) => {
    // console.log(e.target.value);
    setForeignCurrency(e.target.value);
  }
  return (
    <Form className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>Trip Title</Form.Label>
        <Form.Control name="title" type="text" placeholder="Enter trip title" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Start Date</Form.Label>
        <Form.Control name="start" type="date" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>End Date</Form.Label>
        <Form.Control name="end" type="date" />
      </Form.Group>
      Native Currency
      <Form.Select onChange={handleChangeNative}>
        <option value="USD">$ - USD - U.S. dollar</option>
        <option value="EUR">€ - EUR - Euro</option>
        <option value="JPY">¥ - JPY - Japanese Yen</option>
        <option value="GBP">£ - GBP - Pound sterling</option>
        <option value="CNY">¥ - CNY - Renminbi</option>
        <option value="AUD">$ - AUD - Australian dollar</option>
        <option value="CAD">$ - CAD - Canadian dollar</option>
        <option value="CHF">Fr. - CHF - Swiss franc</option>
        <option value="HKD">HK$ - HKD - Hong Kong dollar</option>
        <option value="SGD">S$ - SGD - Singapore dollar</option>
      </Form.Select>
      Foreign Currency
      <Form.Select onChange={handleChangeForeign}>
        <option value="USD">$ - USD - U.S. dollar</option>
        <option value="EUR">€ - EUR - Euro</option>
        <option value="JPY">¥ - JPY - Japanese Yen</option>
        <option value="GBP">£ - GBP - Pound sterling</option>
        <option value="CNY">¥ - CNY - Renminbi</option>
        <option value="AUD">$ - AUD - Australian dollar</option>
        <option value="CAD">$ - CAD - Canadian dollar</option>
        <option value="CHF">Fr. - CHF - Swiss franc</option>
        <option value="HKD">HK$ - HKD - Hong Kong dollar</option>
        <option value="SGD">S$ - SGD - Singapore dollar</option>
      </Form.Select>
      <Form.Group className="mb-3">
        <Form.Label>Budget</Form.Label>
        <Form.Control name="budget" type="number" />
      </Form.Group>
      <Button className="buttons" type="submit">Add Trip</Button>
    </Form>
  );
}


export default NewTripForm;