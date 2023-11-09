import { useState } from 'react'

export default function UserModal ({ show, onClose, onSave, existingFirstName, existingLastName }) {

  console.log("!!! show: ", show, "onClose: ", onClose, "onSave: ", onSave, "existingFirstName: ", existingFirstName, "existingLastName: ", existingLastName)

  const [firstName, setFirstName] = useState(existingFirstName)
  const [lastName, setLastName] = useState(existingLastName)

  if (!show) {
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(firstName, lastName)
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Name</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="modal-actions">
                <button type="button" onClick={onClose}>Cancel</button>
                <button type="submit">Save Changes</button>
            </div>
        </form>
      </div>
    </div>
  )
}