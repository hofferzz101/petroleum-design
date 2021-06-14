import React, { useEffect, useState } from "react"
// reactstrap components
import {
  Card,
  FormGroup,
  Label,
  Form,
  Input,
  Row,
  Modal,
  ModalFooter,
  ModalHeader,
  Button,
  ModalBody,
  Container,
} from "reactstrap"

import Header from "components/Headers/Header.js"

import { useHistory } from "react-router-dom"

export default function CreateOrder() {
  let history = useHistory()
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <div className="container">
                <h1 className="text-center mt-3">Create Order</h1>
                <Form>
                  <div className="row mt-2">
                    <div className="col-md-2" />
                    <div className="col-md-4">
                      <FormGroup>
                        <Input type="text" placeholder="Contract" />
                      </FormGroup>
                      <FormGroup>
                        <Input type="text" placeholder="Contact Number" />
                      </FormGroup>
                      <FormGroup>
                        <Input type="text" placeholder="Order No" />
                      </FormGroup>
                      <FormGroup>
                        <Input type="text" placeholder="Hauler Number" />
                      </FormGroup>
                      <FormGroup>
                        <Input type="text" placeholder="Driver Number" />
                      </FormGroup>
                      <FormGroup>
                        <Input type="text" placeholder="PO Number" />
                      </FormGroup>
                    </div>
                    <div className="col-md-4">
                      <FormGroup>
                        <Input type="text" placeholder="Suplier Number" />
                      </FormGroup>
                      <FormGroup>
                        <Input type="text" placeholder="Terminal Number	" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Order Date</Label>
                        <Input type="date" placeholder="Order Date" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Expiration Date</Label>
                        <Input type="date" placeholder="Expiration Date" />
                      </FormGroup>
                      <FormGroup>
                        <Button
                          type="button"
                          onClick={() => history.push("/admin/orders")}
                          className="w-100"
                          color="primary"
                        >
                          Create Order
                        </Button>
                      </FormGroup>
                    </div>
                  </div>
                </Form>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}
