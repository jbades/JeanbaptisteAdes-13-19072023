import { useState } from 'react'

export default function UserModal ({ show, onClose, onSave, existingFirstName, existingLastName }) {

  // setting local state
  const [firstName, setFirstName] = useState(existingFirstName)
  const [lastName, setLastName] = useState(existingLastName)

  if (!show) {
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(firstName, lastName)
  }

  // rendering modal
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Name</h2>
        <form onSubmit={handleSubmit}>
            <div className="modal-line">
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="modal-line">
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="modal-actions">
                <button className="transaction-button" type="button" onClick={onClose}>Cancel</button>
                <button className="transaction-button" type="submit">Save</button>
            </div>
        </form>
      </div>
    </div>
  )
}