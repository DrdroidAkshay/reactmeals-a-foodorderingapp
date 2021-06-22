import { useRef } from "react";
import Styles from "./Checkout.module.css";
const Checkout = (props) => {
  const nameRef = useRef();
  const mobileRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const postalRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredMobile = mobileRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredPostalCode = postalRef.current.value;
  };

  return (
    <form className={Styles.form} onSubmit={confirmHandler}>
      <div className={Styles.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="namw" ref={nameRef} />
      </div>
      <div className={Styles.control}>
        <label htmlFor="mobile">Mobile</label>
        <input type="text" id="mobile" ref={mobileRef} />
      </div>
      <div className={Styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
      </div>
      <div className={Styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
      </div>
      <div className={Styles.control}>
        <label htmlFor="postalcode">Postal Code</label>
        <input type="text" id="postalcode" ref={postalRef} />
      </div>
      <div className={Styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={Styles.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
