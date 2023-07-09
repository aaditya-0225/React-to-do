import { Button, Form, InputGroup } from "react-bootstrap";

export default function Input({ value, onChange, onClick }) {
  return (
    <div>
      <div
        style={{
          margin: "20%",
          marginTop: "5%",
          marginBottom: "5%",
          justifyContent: "center"
        }}
      >
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            value={value}
            placeholder=" Enter your task"
            onChange={onChange}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Button variant="primary" onClick={onClick}>
            Add
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}
