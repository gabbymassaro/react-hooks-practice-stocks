import React from "react"

function Stock({ stock: { id, ticker, name, type, price }, handlePortfolio }) {
  function handleOnClick() {
    handlePortfolio(id)
  }

  return (
    <div>
      <div className="card" value={type} onClick={handleOnClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {ticker}: {price}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Stock
