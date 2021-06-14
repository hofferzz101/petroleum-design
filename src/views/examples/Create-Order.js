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
  Table,
} from "reactstrap"

import Header from "components/Headers/Header.js"

import { useHistory } from "react-router-dom"

export default function CreateOrder() {
  const [state1, setstate1] = useState("gal")
  const [state2, setstate2] = useState("5,000 gal")
  const [state3, setstate3] = useState("200")
  const [state4, setstate4] = useState("2,000 gal")

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
                        <Label for="exampleSelect">Location</Label>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>Enter Station Location Here</option>
                          <option>USA</option>
                          <option>UK</option>
                          <option>LA</option>
                          <option>Canada</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">Delivery Date</Label>
                        <Input type="date" placeholder="Contact Number" />
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleEmail">Additonal Information</Label>
                        <Input type="text" placeholder="PO Number" />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="text"
                          placeholder="Notes & Driver Instruction"
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-4">
                      <FormGroup>
                        <Label for="exampleSelect">
                          Delivery Time Preference
                        </Label>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>Select Delivery Time Preference</option>
                          <option>Early Morning: 12:00am - 05:59am</option>
                          <option>Late Morning: 06:00am - 11:59am</option>
                          <option>Early Evening: 12:00pm - 05:59pm</option>
                          <option>Late Evening: 06:00pm - 11:59pm</option>
                        </Input>
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleSelect">Products</Label>
                        <Table>
                          <thead>
                            <tr>
                              <th>Tank / Product</th>
                              <th>Citgo Lemont</th>
                              <th>Exxon Chicago</th>
                              <th>Quality Desired</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tank 01</td>
                              <td>$2.48 / gal</td>
                              <td>$2.44 / gal</td>
                              <td>
                                <Input
                                  value={state1}
                                  onChange={e => setstate1(e.target.value)}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Tank 02</td>
                              <td>$2.18 / gal</td>
                              <td>$2.18 / gal</td>
                              <td>
                                <Input
                                  value={state2}
                                  onChange={e => setstate2(e.target.value)}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Tank 03</td>
                              <td>$1.41 / gal</td>
                              <td>$2.08 / gal</td>
                              <td>
                                <Input
                                  value={state3}
                                  onChange={e => setstate3(e.target.value)}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Tank 04</td>
                              <td>$1.48 / gal</td>
                              <td>$1.38 / gal</td>
                              <td>
                                <Input
                                  value={state4}
                                  onChange={e => setstate4(e.target.value)}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </Table>
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
