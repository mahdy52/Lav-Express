import { Button, Form, Modal } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Adduser } from "../action/user";
import { useSelector, useDispatch } from "react-redux";

function FormAjoutAdmin() {
  //dispatch function
  const dispatch = useDispatch();

  // récupération val input

  const [Input, setInput] = useState({
    description_Service :"",
    date :"",
    adress :"",
    phone :"",
    car_description :"",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...Input,
      [name]: value,
    });
  };
  // *************** add to db

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(Adduser(Input.description_Service, Input.date , Input.adress , Input.phone ,Input.car_description));

    console.log("val input", Input);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* ********************modal********************* */}

      <div>
        <Button variant="primary" onClick={handleShow}>
          Ajouter un nouveau produit
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Vous pouvez Ajouter un nouveau produit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* ************************************* */}
            <div>
              <Form onSubmit={handelSubmit} className="">
                <Form.Group controlId="formGroupPassword">
                  <Form.Control
                    onChange={handelChange}
                    name="description_Service"
                    type="text"
                    placeholder="Entrez le titre de votre produit"
                  />
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                  <Form.Control
                    onChange={handelChange}
                    name="date"
                    type="text"
                    placeholder="Entrez une description  de votre produit"
                  />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                  <Form.Control
                    name="adress"
                    onChange={handelChange}
                    type="text"
                    placeholder="Entrez le  prix de votre produit"
                  />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                  <Form.Control
                    name="phone"
                    onChange={handelChange}
                    type="text"
                    placeholder="Entrez num"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Control
                    name="car_description"
                    onChange={handelChange}
                    type="text"
                    placeholder="Entrez disc"
                  />
                </Form.Group>
                
                <Button type="submit"> Valider</Button>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default FormAjoutAdmin;
