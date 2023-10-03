import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../stateProvider";
import "./Subtotal.css";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const [{basket}] = useStateValue();
  const [total, setTotal] = useState(0)
  var totals = 0
  basket.map(item=>{
    totals+=item.price
  })
  // setTotal(totals)
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"/> This order contains a subtotal__gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal