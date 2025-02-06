import React, {useState, useEffect} from "react";


export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null)
    useEffect(() => {
        async function fetchContacts() {
            try{
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const user = await response.json()
                setContact(user)
                console.log("Contact is", contact)
            } catch(error) {
                console.error(error)
            }
        }
        fetchContacts();
    }, [])

    if (!contact) {
        return <p>loading...</p>
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th colSpan='4'>{contact.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Address</td>
                    </tr>
                    <tr>
                        <td>{contact.username}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.address.street} {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => setSelectedContactId(null)}>Back</button>
        </>
    )
}