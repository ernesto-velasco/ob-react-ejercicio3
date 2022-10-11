import React, { useState } from "react";
import { ContactModel } from "../../models/contact.class";
import Contact from "../pure/Contact";
import ContactForm from "../pure/forms/ContactForm";

const ContactList = () => {
  // * Contactos por defecto
  const contact1 = new ContactModel("Martín", "martin@example", true);
  const contact2 = new ContactModel("Guillermo", "guillermo@example", true);
  const contact3 = new ContactModel("Alejandro", "alejandro@example", false);

  // * Estado del componente
  const [contacts, setContacts] = useState([contact1, contact2, contact3]);

  // * Funciones para la lista de contactos
  // Cambiar el estado del contacto de conectado a desconectado
  const changeContactStatus = (contact) => {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].status = !contacts[index].status;
    setContacts(tempContacts);
  };
  // Añadir un nuevo contacto
  const addNewContact = (contact) => {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  };
  // Eliminar un contacto
  const removeContact = (contact) => {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <Contact
                contact={contact}
                key={index}
                changeStatus={changeContactStatus}
                remove={removeContact}
              ></Contact>
            );
          })}
        </tbody>
      </table>
      <div>
        <h2>Add a new contact</h2>
        <div>
          <ContactForm add={addNewContact}></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
