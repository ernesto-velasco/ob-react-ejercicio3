import React from "react";
import propTypes from "prop-types";
import { ContactModel } from "../../models/contact.class";
const Contact = ({ contact, changeStatus, remove }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.status ? "Conectado" : "Desconectado"}</td>
      <td>
        <button onClick={() => changeStatus(contact)}>Status</button>
        <button onClick={() => remove(contact)}>Remove</button>
      </td>
    </tr>
  );
};

Contact.propTypes = {
  contact: propTypes.instanceOf(Contact),
  changeStatus: propTypes.func.isRequired,
  remove: propTypes.func.isRequired,
};

export default Contact;
