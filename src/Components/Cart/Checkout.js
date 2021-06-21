import Styles from "./Checkout.module.css";
const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={Styles.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="namw" />
      </div>
      <div className={Styles.control}>
        <label htmlFor="mobile">Mobile</label>
        <input type="text" id="mobile" />
      </div>
      <div className={Styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={Styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={Styles.control}>
        <label htmlFor="postalcode">Postal Code</label>
        <input type="text" id="postalcode" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};
export default Checkout;
