import React from "react"
import Stock from "./Stock"

function PortfolioContainer({ stocks, handleSellStocks }) {
  const renderPortfolio = stocks.filter((stock) => {
    return stock.inPortfolio === true
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderPortfolio.map((stock) => (
        <Stock
          key={stock.id}
          stock={stock}
          handlePortfolio={handleSellStocks}
        />
      ))}
    </div>
  )
}

export default PortfolioContainer
