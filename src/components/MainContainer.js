import React, { useEffect, useState } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [isAlphabetical, setIsAlphabetical] = useState(false)
  const [isPrice, setIsPrice] = useState(false)
  const [filterByType, setFilterByType] = useState("")

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

  function handleSorting() {
    if (!isAlphabetical) {
      const alphaSort = [...stocks].sort((a, b) => a.name.localeCompare(b.name))
      setStocks(alphaSort)
    } else if (!isPrice) {
      const priceSort = [...stocks].sort((a, b) => a.price - b.price)
      setStocks(priceSort)
    }
  }

  function handleFilter() {
    if (filterByType !== "") {
      const filtered = stocks.filter((stock) => filterByType === stock.type)
      return filtered
    }
  }

  return (
    <div>
      <SearchBar
        setIsAlphabetical={setIsAlphabetical}
        setIsPrice={setIsPrice}
        handleSorting={handleSorting}
        setFilterByType={setFilterByType}
        handleFilter={handleFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocks}
            handlePortfolio={handlePortfolio}
            isAlphabetical={isAlphabetical}
          />
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
