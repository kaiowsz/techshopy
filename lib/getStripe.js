import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

export default function getStripe() {
    if(!stripePromise) {
        stripePromise = loadStripe(`pk_test_51MNwRmEK4wntFnP0LGzVNLWaEhGcRkhVuw0peTmSwu1r18XBomprZW6v9Fy0DZvEExoSNvDczLK7KGnZMKnq8lYM00mcviLQjP`)
    }


    return stripePromise
}