import React from 'react'

const AddToList = ({handleList, anime}) => {
  return (
    <div>
      <div className="myList" onClick={()=>handleList(anime)}>
        <p>Add To List +</p>
      </div>
    </div>
  )
}

export default AddToList
