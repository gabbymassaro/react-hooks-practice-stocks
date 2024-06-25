import React from "react"
import Stock from "./Stock"

function StockContainer({ stocks, handlePortfolio }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} handlePortfolio={handlePortfolio} />
      ))}
    </div>
  )
}

export default StockContainer
