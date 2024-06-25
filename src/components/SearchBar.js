import React from "react"

function SearchBar({ setIsAlphabetical, setIsPrice }) {
  function handleRadioButtons(event) {
    if (event.target.value === "Alphabetically") {
      setIsAlphabetical(true)
      setIsPrice(false)
    } else if (event.target.value === "Price") {
      setIsAlphabetical(false)
      setIsPrice(true)
    }
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
          onChange={(e) => handleRadioButtons(e)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={(e) => handleRadioButtons(e)}
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
