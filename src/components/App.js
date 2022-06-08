import { Component } from 'react';
import NewContact from './NewContact';
import Contacts from './Contacts';
import Filter from './Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteCont = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => id !== contact.id),
    }));
  };

  onSubmitNewContact = contact => {
    const NewContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === NewContact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} already in contacts`);
    }

    if (
      this.state.contacts.some(
        contact =>
          contact.number.toLowerCase() === NewContact.number.toLowerCase()
      )
    ) {
      alert(`${contact.number} already in contacts`);
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, NewContact],
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <NewContact onSubmit={this.onSubmitNewContact} />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />
        <Contacts
          contacts={this.getVisibleContacts()}
          onDelete={this.deleteCont}
        />
      </>
    );
  }
}

export default App;
