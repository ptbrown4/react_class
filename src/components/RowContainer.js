import React, { useState } from "react"
import styled from "styled-components"

import EditBox from "./EditBox";

function RowContainer({ rowData, type }) {
  const [showEditBox, setShowEditBox] = useState(false)

  return (
    <>
      <Container>
        <button onClick={() => setShowEditBox(true)}>Edit</button>
        <p>Name: {rowData.name}</p>
        <p>Date: {rowData.date}</p>
        <p>Description: {rowData.description}</p>
      </Container>
      {showEditBox && (
        <EditBox 
          name={rowData.name}
          date={rowData.date}
          description={rowData.description}
          type={type}
          onClose={() => setShowEditBox(false)}
        />
      )}
    </>
  )
}

const Container = styled.div`
  border: 2px solid #5a7702;
  display: flex;
  font-size: 18px;
  padding: 12px;
  
  & p {
    flex: 1 1 0px;
  }
`

export default RowContainer