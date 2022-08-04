import Modal from "../UI/Modal";
import classes from "./Cart.module.css"
import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-contex";
import CartItem from "./CartItem";
import Checkout from "./Checkout";


const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const checkoutHandler = () => {
        setIsCheckout(true);

    }

    const submitOrderHandler = async (userData) => {
        setIsSubmit(true);
        await fetch("https://food-order-app-e2ce8-default-rtdb.firebaseio.com/orders.json",{
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsCheckout(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };

    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;


    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = (

        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (

                // <li>{item.name}</li>
                <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)} />
            ))}

        </ul>
    );


    const checkoutAction = (

        <div className={classes.actions}>

            <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={checkoutHandler} >Order</button>}
        </div>

    )

    const cartModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>

            </div>
            {isCheckout && (<Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />)}
            {!isCheckout && checkoutAction}



        </React.Fragment >
    )
    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = (
        <React.Fragment>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>
                    Close
                </button>
            </div>
        </React.Fragment>
    );

    return (
        <Modal onClose={props.onClose}>
            {!isSubmit && !didSubmit && cartModalContent}
            {isSubmit && isSubmittingModalContent}
            {!isSubmit && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;