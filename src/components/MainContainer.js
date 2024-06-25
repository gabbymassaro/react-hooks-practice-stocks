import React, { useEffect, useState } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => {
        const initialStock = data.map((stockItem) => ({
          ...stockItem,
          inPortfolio: false,
        }))
        setStocks(initialStock)
      })
  }, [])

  function handlePortfolio(id) {
    const newStocks = stocks.map((stock) => {
      if (stock.id === id && stock.inPortfolio === false) {
        return {
          ...stock,
          inPortfolio: true,
        }
      }
      return stock
    })
    setStocks(newStocks)
  }

  function handleSellStocks(id) {
    const soldStocks = stocks.map((stock) => {
      if (stock.id === id && stock.inPortfolio === true) {
        return {
          ...stock,
          inPortfolio: false,
        }
      }
      return stock
    })
    setStocks(soldStocks)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handlePortfolio={handlePortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stocks={stocks}
            handleSellStocks={handleSellStocks}
          />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
