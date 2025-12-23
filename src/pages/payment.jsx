export default function Payment() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Payment Page</h1>

      <input placeholder="Name on Card" /><br /><br />
      <input placeholder="Card Number" /><br /><br />
      <input placeholder="Expiry Date" /><br /><br />
      <input placeholder="CVV" /><br /><br />

      <button>Pay Now</button>
    </div>
  );
}
