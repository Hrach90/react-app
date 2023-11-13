import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { sendContactForm } from "../../service/requests";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Contact Us</h1>
      <Form>
        <Form.Control
          placeholder="Name"
          style={{ marginTop: "5px" }}
          onChange={handleOnChange}
          value={formData.name}
          name="name"
        />
        <Form.Control
          value={formData.email}
          placeholder="Email"
          style={{ marginTop: "5px" }}
          name="email"
          onChange={handleOnChange}
        />
        <Form.Control
          value={formData.message}
          placeholder="Message"
          style={{ marginTop: "5px" }}
          name="message"
          onChange={handleOnChange}
        />
        <Button
          style={{ marginTop: "5px" }}
          onClick={() =>
            setFormData({
              name: "",
              email: "",
              message: "",
            })
          }
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
