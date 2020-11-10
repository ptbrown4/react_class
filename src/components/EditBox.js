import React, { useState } from 'react'
import styled from 'styled-components'

function EditBox({ name, date, description, onClose, type}) {
    const [formName, setFormName] = useState(name || "")
    const [formDate, setFormDate] = useState(date || new Date())
    const [formDescription, setFormDescription] = useState([])
    
    return(
        <div>
            <button onClick={onClose}>X</button>
            <form>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={formName} 
                        onChange={(name) => setFormName(name)}/>
                </div>      
                <div>
                    <label>Date:</label>
                    <input 
                        type="text" 
                        value={formDate} 
                        onChange={(date) => setFormDate(date)}/>
                </div>  
                <div>
                    <label>Description:</label>
                    <input 
                        type="text" 
                        value={formDescription} 
                        onChange={(description) => setFormDescription(description)}/>
                </div>       
                <button></button>
            </form>
        </div>
    )
}

export default EditBox;