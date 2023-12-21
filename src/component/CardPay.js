import "../css/card_pay.css";

function CardPay() {

  return (
    <div className="card_pay">
     <div class="container">
        <h1>Make a Payment</h1>
        <form id="paymentForm">
            <div class="input-group">
                <label for="cardNumber">Card Number</label>
                <input type="tel" id="cardNumber" name="cardNumber" required/>
                <div class="icon cardNumberIcon"></div>
            </div>
            <div class="input-group">
                <label for="cardName">Name on Card</label>
                <input type="text" id="cardName" name="cardName" required/>
                <div class="icon cardNameIcon"></div>
            </div>
            <div class="input-group">
                <label for="expiryDate">Expiry Date</label>
                <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required/>
            </div>
            <div class="input-group">
                <label for="cvv">CVV</label>
                <input type="number" id="cvv" name="cvv" required/>
            </div>
            <div class="input-group">
                <label for="amount">Amount</label>
                <input type="number" id="amount" name="amount" required/>
            </div>
            
            <button type="submit">Pay Now</button>
        </form>
    </div>
    </div>
  );
}

export default CardPay;
