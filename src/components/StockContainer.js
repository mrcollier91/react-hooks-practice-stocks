import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleClick}) {
console.log(stocks)


  return (
    <div>
      <h2>Stocks</h2>
      {
        stocks.map(stock => (
          <Stock key={stock.id} stock={stock} handleClick={handleClick}/>
        ))
      }
    </div>
  );
}

export default StockContainer;
