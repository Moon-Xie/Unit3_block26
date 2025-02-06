import ContactList from './components/ContactList'
import React, {useState} from 'react'

import './App.css'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {
        selectedContactId ? 
        (<div><SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/></div>) :
        (<ContactList setSelectedContactId={setSelectedContactId}/>)
      }
    </>
  )
}

export default App
