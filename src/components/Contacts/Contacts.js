import React from 'react';
import propTypes from 'prop-types';
import s from './Contacts.module.css';

const Contacts = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <div className={s.container}>
      <ul className={s.element}>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}:{contact.number}
            <button
              className={s.deleteButton}
              type="button"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: propTypes.array,
  onDelete: propTypes.func.isRequired,
};

export default Contacts;
