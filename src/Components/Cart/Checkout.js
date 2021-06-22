import { useRef, useState } from "react";
import Styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 5;
const isTenChar = (value) => value.trim().length === 10;
const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    mobile: true,
    street: true,
    city: true,
    postalcode: true,
  });

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

    const nameIsValid = !isEmpty(enteredName);
    const mobileIsValid = isTenChar(enteredMobile);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityIsValid = !isEmpty(enteredCity);
    const postalCodeIsValid = isFiveChar(enteredPostalCode);

    setFormValidity({
      name: nameIsValid,
      mobile: mobileIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postalcode: postalCodeIsValid,
    });

    const formIsValid =
      nameIsValid &&
      mobileIsValid &&
      streetIsValid &&
      cityIsValid &&
      postalCodeIsValid;

    if (!formIsValid) {
      return;
    }
    console.log(
      enteredName,
      enteredMobile,
      enteredStreet,
      enteredCity,
      enteredPostalCode
    );
  };

  return (
    <form className={Styles.form} onSubmit={confirmHandler}>
      <div
        className={`${Styles.control} ${
          formValidity.name ? "" : Styles.invalid
        }`}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="namw" ref={nameRef} />
        {!formValidity.name && <p>Name is not valid</p>}
      </div>
      <div
        className={`${Styles.control} ${
          formValidity.mobile ? "" : Styles.invalid
        }`}
      >
        <label htmlFor="mobile">Mobile</label>
        <input type="text" id="mobile" ref={mobileRef} />
        {!formValidity.mobile && <p>Mobile is not valid</p>}
      </div>
      <div
        className={`${Styles.control} ${
          formValidity.street ? "" : Styles.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formValidity.street && <p>Street is not valid</p>}
      </div>
      <div
        className={`${Styles.control} ${
          formValidity.city ? "" : Styles.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formValidity.city && <p>City is not valid</p>}
      </div>
      <div
        className={`${Styles.control} ${
          formValidity.postalcode ? "" : Styles.invalid
        }`}
      >
        <label htmlFor="postalcode">Postal Code</label>
        <input type="text" id="postalcode" ref={postalRef} />
        {!formValidity.postalcode && <p>Postal Code is not valid</p>}
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
