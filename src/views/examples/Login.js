import React, { useState } from "react"

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap"

import { useHistory } from "react-router-dom"
import { CREATE } from "../../configuration/API-Instance"

import { showNotfication } from "../../components/ResuableComponents/notification"

const Login = () => {
  const history = useHistory()

  const [isPwdDisplayed, setisPwdDisplayed] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    let body = {
      email,
      password,
    }

    CREATE("/user/login", body)
      .then(result => {
        if (result.status == 200) {
          history.push("/admin/index")
          localStorage.setItem("token", result.data.response.token)
          localStorage.setItem("loggedInUser", JSON.stringify(result.data.response.user))
          showNotfication("success", "Login Passed", "LoggedIn Successfully")
        }
      })
      .catch(e =>
        showNotfication("error", "Login failed", e.response.data.message)
      )
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent"></CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type={isPwdDisplayed ? "text" : "password"}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                  onChange={() => setisPwdDisplayed(!isPwdDisplayed)}
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Show Password</span>
                </label>
              </div>
              <div className="text-center">
                <Button
                  onClick={login}
                  className="my-4"
                  color="primary"
                  type="button"
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          {/* <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col> */}
        </Row>
      </Col>
    </>
  )
}

export default Login
