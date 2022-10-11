import React, { useRef } from "react";
import propTypes from "prop-types";
import { ContactModel } from "../../../models/contact.class";

export default function ContactForm({ add }) {
  // * Referencias para los campos del formulario para agregar un nuevo contacto
  const nameRef = useRef("");
  const emailRef = useRef("");
  // * Crear nuevo contacto usando el modelo antes de mandarlo a lista
  const addNewContact = (e) => {
    e.preventDefault();
    const newContact = new ContactModel(
      nameRef.current.value,
      emailRef.current.value,
      true
    );
    add(newContact);
  };
  return (
    <form onSubmit={addNewContact}>
      <input ref={nameRef} type="text" placeholder="Name" />
      <input ref={emailRef} type="text" placeholder="email" />
      <button type="submit">Save</button>
    </form>
  );
}

ContactForm.propTypes = {
  add: propTypes.func.isRequired,
};
