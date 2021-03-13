import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form``;
const StringInput = styled.input``;
const Area = styled.input``;

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
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
  };
  return <Form name="contact" method="POST" data-netlify="true"></Form>;
}

export default ContactForm;
