import React from 'react'
import './App.css';
import contacts from './contacts.json';

const firstContacts = contacts.slice(0,5)
  // transformer la function App en class avec state

const addRandomContact = contacts[Math.floor(Math.random()*contacts.length)]

// const newContactsList = firstContacts.push

class App extends React.Component {
  state= {
    contacts: firstContacts,
  };

  function addRandomContact() => {
    const stateCopy = [...this.state.contacts]
    stateCopy.push(contacts[Math.floor(Math.random()*contacts.length)])

    this.setState({
      contacts:stateCopy
    })
  }

  sortByName = () => {
    const stateCopy = [...this.state.contacts]
    stateCopy.sort((a,b) => a.name - b.name)
    //a.name.localeCompare(b.name)

    this.setState({
      contacts:stateCopy
    })
  };

  render() {
    return (
      <div className="App">
          <button onClick={this.addRandom}> Add a random contact </button>
          <button onClick={this.sortByName}> Sort contacts by name </button>
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map((contacts) => {
            return ( 
              <tr>
                  <td><img src="{contacts.pictureUrl}" alt="default image"/></td>
                  <td>{contacts.name}</td>
                  <td>{contacts.popularity}</td>
              </tr>          
            )
          })}
        </tbody>
      </table>
      </div>
    );                        
  }
  //il faut toujours donner une clef et une valeur à une state

// function App() {
//   return (
//     <div className="App">
//       <table className="firstContacts">
//         <firstContacts.pictureUrl />
//         <firstContacts.name />
//         <firstContacts.popularity />
//       </table>
//     </div>
//   )
// }

export default App;
