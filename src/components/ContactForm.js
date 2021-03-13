import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
};
const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  padding-left: 2em;
`;
const Label = styled.label`
  padding-bottom: 2em;
  font-weight: bold;
`;
const StringInput = styled.input`
  margin-top: 10px;
  padding: 1em;
  width: 80%;
  border: solid #e4e4e4 2px;
  border-radius: 12px;
`;
const Area = styled.input``;

const Submit = styled.button`
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  background-color: #8c6034;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.5em;

  width: 80%;
`;

function ContactForm(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setName("");
      setEmail("");
      setPhone("");
      setArea("");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
  };
  return (
    <Form name="contact" method="POST" data-netlify="true">
      <Label for="name">
        Name <br></br>
        <StringInput
          type="text"
          name="name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></StringInput>
      </Label>
      <Label for="address">
        Home Address <br></br>
        <StringInput
          type="text"
          name="address"
          placeholder="123 Road Name Rd, San Diego Cal"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></StringInput>
      </Label>
      <Label for="phone">
        Phone Number <br></br>
        <StringInput
          type="tel"
          name="phone"
          placeholder="7607012235"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></StringInput>
      </Label>
      <Label for="email">
        Email <br></br>
        <StringInput
          type="email"
          name="name"
          placeholder="email@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></StringInput>
      </Label>
      <Submit type="submit">Submit</Submit>
    </Form>
  );
}

export default ContactForm;
