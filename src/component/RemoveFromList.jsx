import React from 'react'

const RemoveFromList = ({handleList, anime}) => {
  return (
    <div>
      <div className="myList" onClick={()=>handleList(anime)}>
        <p>Remove from List - </p>
      </div>
    </div>
  )
}

export default RemoveFromList
