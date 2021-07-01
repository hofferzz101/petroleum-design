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

import "./pages/CreateOrder.css"

import Header from "components/Headers/Header.js"
import { openNotificationWithIcon } from "./NotificationPop"
import { notification, Space } from "antd"

// import { ExportCSV } from "./excel/exportExcel"
// import moment from "moment"

import { useHistory } from "react-router-dom"
import { GET } from "configuration/API-Instance"
import { CREATE } from "configuration/API-Instance"
import { UPDATE } from "configuration/API-Instance"

export default function CreateOrder() {
  const [state1, setstate1] = useState("")
  const [state2, setstate2] = useState("5,000 gal")
  const [state3, setstate3] = useState("200")
  const [state4, setstate4] = useState("2,000 gal")

  const [productResponse, setproductResponse] = useState([])
  const [locationApi, setLocationApi] = useState([])

  const [rackLocation, setRackLocation] = useState("NW Corner")
  const [deleveryDate, setDeliveryDate] = useState("")
  const [deliveryWindow, setDeliveryWindow] = useState("")
  const [POnumber, setPOnumber] = useState("")
  const [Notes, setNotes] = useState("")
  const [getOrdersData, setGetOrdersData] = useState("")

  const [OrderNumber, setOrderNumber] = useState("")
  const [ShippingDate, setShippingDate] = useState("")

  const [NewFiles, setNewFiles] = useState("")

  const [text, settext] = useState([])

  const [filteredProducts, setFilteredProducts] = useState([])

  let temperedData = []

  let history = useHistory()

  const handleState = (e, index) => {
    const values = [...productResponse]
    values[index][e.target.name] = e.target.value

    setproductResponse(values)
  }

  const gettingProducts = () => {
    GET("/products").then(res => {
      setproductResponse(res.data.response)
    })
  }

  const gettingLocation = () => {
    GET("/racks").then(res => {
      setLocationApi(res.data.response)
    })
  }

  const getOrder = () => {
    GET("/orders").then(response => {
      response.data.response.orders.map(data => {
        setGetOrdersData(data)
      })
    })
  }

  const handleCsv = () => {
    const formData = new FormData()
    formData.append("file", NewFiles)

    CREATE("/orders/upload-csv", formData)
      .then(res => {
        if (res.status == 200) {
          openNotificationWithIcon(
            "success",
            "Success",
            "Uploaded CSV Successfully"
          )
          history.push("/admin/index")
        }
      })
      .catch(e => {
        openNotificationWithIcon("error", "Error", e.response.data.message)
      })
  }

  const createOrder = () => {
    let productItem = []
    if (productResponse.length) {
      productItem = productResponse.filter(item => item.quntity)
    }

    let body = {
      location: rackLocation,
      products: productItem,
      delivery_date: deleveryDate,
      delivery_window: deliveryWindow,
      notes: Notes,
      p_no: POnumber,
      shipment_date: String(ShippingDate),
      order_no: OrderNumber,
    }

    CREATE("/orders", body)
      .then(res => {
        if (res.status == 200) {
          openNotificationWithIcon(
            "success",
            "Success",
            "Order Created Successfully"
          )
          history.push("/admin/index")
        }
      })
      .catch(e => {
        openNotificationWithIcon("error", "Error", e.response.data.message)
      })
  }

  const handleFile = e => {
    var filess = e.target.files[0]
    setNewFiles(filess)
  }

  useEffect(() => {
    gettingProducts()
    getOrder()
    gettingLocation()
  }, [])

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col-md-12">
            <Card className="shadow">
              <div className="container">
                <Form className="main-form-co">
                  <div className="col-md-12">
                    <FormGroup>
                      <div className="location-div-co">
                        <Label
                          className="location-div-label-co"
                          for="exampleSelect"
                        >
                          <h3 className="location-text">Location : </h3>
                        </Label>
                        <Input
                          className="location-div-input-co"
                          type="select"
                          name="select"
                          id="exampleSelect"
                        >
                          {locationApi.map((data, i) => (
                            <option
                              onChange={e => setRackLocation(e.target.value)}
                              key={i}
                            >
                              {data.location}
                            </option>
                          ))}
                        </Input>
                      </div>
                    </FormGroup>

                    <FormGroup className="col md-col-6">
                      <div className="products-div-co">
                        <div>
                          <Label
                            className="products-div-label-co"
                            for="exampleSelect"
                          >
                            <h3 className="products-text">Products : </h3>
                          </Label>
                        </div>
                        <div>
                          <div>
                            <Table className="products-div-table">
                              <thead>
                                <h5 className="products-div-table-heading">
                                  Products,Pricing and Quantities
                                </h5>
                                <tr>
                                  <th className="products-div-table-subheading">
                                    Tank / Product
                                  </th>
                                  <th className="products-div-table-subheading">
                                    Citgo Lemont
                                  </th>
                                  <th className="products-div-table-subheading">
                                    Exxon Chicago
                                  </th>
                                  <th className="products-div-table-subheading">
                                    Quality Desired
                                  </th>
                                </tr>
                              </thead>

                              {productResponse.map((data, i) => (
                                <tbody>
                                  <tr>
                                    <td>{data.name}</td>

                                    <td>
                                      <span>
                                        <input type="radio" />
                                      </span>
                                      {` $ ${data.price_per_gallon}/${data.unit_of_measure}`}
                                    </td>
                                    <td>
                                      <span>
                                        <input type="radio" />
                                      </span>
                                      {` $ ${data.price_per_gallon}/${data.unit_of_measure}`}
                                    </td>
                                    <td>
                                      <input
                                        name="quntity"
                                        value={
                                          productResponse[i]
                                            ? productResponse[i].quntity
                                            : "0"
                                        }
                                        onChange={e => handleState(e, i)}
                                      />
                                    </td>
                                  </tr>
                                  {/* <tr>
                                   <td>Tank 02</td>
                                   <td><span><input type="radio" /></span>$2.18 / gal</td>
                                   <td><span><input type="radio" /></span>$2.18 / gal</td>
                                   <td>
                                     <Input
                                       value={state2}
                                       onChange={e => setstate2(e.target.value)}
                                     />
                                   </td>
                                 </tr>
                                 <tr>
                                   <td>Tank 03</td>
                                   <td><span><input type="radio" /></span>$1.41 / gal</td>
                                   <td><span><input type="radio" /></span>$2.08 / gal</td>
                                   <td>
                                     <Input
                                       value={state3}
                                       onChange={e => setstate3(e.target.value)}
                                     />
                                   </td>
                                 </tr>
                                 <tr>
                                   <td>Tank 04</td>
                                   <td><span><input type="radio" /></span>$1.48 / gal</td>
                                   <td><span><input type="radio" /></span>$1.38 / gal</td>
                                   <td>
                                     <Input
                                       value={state4}
                                       onChange={e => setstate4(e.target.value)}
                                     />
                                   </td>
                                 </tr> */}
                                </tbody>
                              ))}
                              {/* <tr>
                                <td>Tank 01</td>

                                <td><span><input type="radio" /></span>$2.48 / gal</td>
                                <td><span><input type="radio" /></span>$2.44 / gal</td>
                                <td>
                                  <Input
                                    value={state1}
                                    onChange={e => setstate1(e.target.value)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>Tank 02</td>
                                <td><span><input type="radio" /></span>$2.18 / gal</td>
                                <td><span><input type="radio" /></span>$2.18 / gal</td>
                                <td>
                                  <Input
                                    value={state2}
                                    onChange={e => setstate2(e.target.value)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>Tank 03</td>
                                <td><span><input type="radio" /></span>$1.41 / gal</td>
                                <td><span><input type="radio" /></span>$2.08 / gal</td>
                                <td>
                                  <Input
                                    value={state3}
                                    onChange={e => setstate3(e.target.value)}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>Tank 04</td>
                                <td><span><input type="radio" /></span>$1.48 / gal</td>
                                <td><span><input type="radio" /></span>$1.38 / gal</td>
                                <td>
                                  <Input
                                    value={state4}
                                    onChange={e => setstate4(e.target.value)}
                                  />
                                </td>
                              </tr> */}
                              {/* </tbody> */}
                            </Table>
                          </div>
                        </div>
                      </div>
                    </FormGroup>

                    <FormGroup>
                      <div className="formgroup-diliverydate-maindiv">
                        <div>
                          <Label
                            className="diliverydate-labeldiv"
                            for="exampleSelect"
                          >
                            <h3 className="deliverytext">Delivery Date : </h3>
                          </Label>
                        </div>
                        <div className="diliverydate-contactno">
                          <Input
                            type="date"
                            placeholder="Contact Number"
                            onChange={e => setDeliveryDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </FormGroup>
                    <div>
                      <FormGroup>
                        <div className="diliveryTime-div">
                          <div>
                            <Label
                              className="diliveryTime-heading-div"
                              for="exampleSelect"
                            >
                              <h3 className="diliveryTimeAndPrefer">
                                Delivery Window :{" "}
                              </h3>
                            </Label>
                          </div>
                          <div>
                            <Input
                              className="diliverytime-input"
                              type="select"
                              name="select"
                              id="exampleSelect"
                              value={deliveryWindow}
                              onChange={e => setDeliveryWindow(e.target.value)}
                            >
                              <option>Dilevery Window</option>
                              <option value="Early Morning: 12:00am - 05:59am">
                                Early Morning: 12:00am - 05:59am
                              </option>
                              <option value="Late Morning: 06:00am - 11:59am">
                                Late Morning: 06:00am - 11:59am
                              </option>
                              <option value="Early Evening: 12:00pm - 05:59pm">
                                Early Evening: 12:00pm - 05:59pm
                              </option>
                              <option value="Late Evening: 06:00pm - 11:59pm">
                                Late Evening: 06:00pm - 11:59pm
                              </option>
                            </Input>
                          </div>
                        </div>
                      </FormGroup>
                    </div>

                    <FormGroup>
                      <div className="additional-main-div">
                        <div>
                          <Label
                            style={{ marginLeft: "9rem" }}
                            for="exampleEmail"
                          >
                            <h3 className="additional-info">PO Number : </h3>
                          </Label>
                        </div>
                        <div>
                          <Input
                            className="additional-input"
                            type="text"
                            placeholder="PO Number"
                            onChange={e => setPOnumber(e.target.value)}
                          />
                          <div>
                          </div>
                          <Input
                            className="additional-input2"
                            onChange={e => setNotes(e.target.value)}
                            type="text"
                            placeholder="Notes & Driver Instruction"
                          />
                        </div>
                      </div>
                    </FormGroup>

                    <FormGroup>
                      <div className="order-main-div">
                        <div>
                          <Label className="order-label" for="exampleEmail">
                            <h3 className="additional-info">Order Number : </h3>
                          </Label>
                        </div>
                        <div>
                          <Input
                            placeholder="Order Number"
                            className="additional-input2"
                            onChange={e => setOrderNumber(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="shipping-main-div">
                        <div>
                          <Label className="shipping-label" for="exampleEmail">
                            <h3 className="additional-info">
                              Shipping Date :{" "}
                            </h3>
                          </Label>
                        </div>
                        <div>
                          <Input
                            placeholder="Shipping Date"
                            className="additional-input2"
                            type="date"
                            onChange={e => setShippingDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </FormGroup>

                    <FormGroup className="btn-div-co">
                      <Button
                        type="button"
                        // onClick={() => history.push("/admin/orders")}
                        onClick={createOrder}
                        className="w-100"
                        // color="primary"
                        id="btn-co"
                      >
                        Create Order
                      </Button>
                      <input
                        style={{ marginLeft: "505px", marginTop: "7px" }}
                        type="file"
                        onChange={handleFile}
                      />
                      <Button
                        type="button"
                        onClick={handleCsv}
                        onChange={handleCsv}
                        className="w-100"
                        // color="primary"
                        id="btn-co"
                      >
                        Uplodad CSV
                      </Button>
                    </FormGroup>
                  </div>
                  {/* <div className="row mt-2">
                    <div className="col-sm-1" />
                    <div className="col-md-2">
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

                      <FormGroup className="col md-col-4">
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
                  </div> */}
                </Form>
              </div>
            </Card>
          </div>
        </Row>
        <openNotificationWithIcon />
        <Space>
          {/* <Button onClick={() => }>Success</Button> */}
          {/* <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
                      <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
                      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button> */}
        </Space>
      </Container>
    </>
  )
}
