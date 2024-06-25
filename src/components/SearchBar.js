import React from "react"

function SearchBar({ setIsAlphabetical, setIsPrice, handleSorting }) {
  function handleRadioButtons(event) {
    if (event.target.value === "Alphabetically") {
      setIsAlphabetical(true)
      setIsPrice(false)
    } else if (event.target.value === "Price") {
      setIsAlphabetical(false)
      setIsPrice(true)
    }
    handleSorting()
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onClick={(event) => handleRadioButtons(event)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onClick={(event) => handleRadioButtons(event)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  )
}

export default SearchBar
