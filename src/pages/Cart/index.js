import style from "./Cart.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Card from "../../components/Cart/Card";
const Cart = () => {

  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <h3>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>  Giỏ hàng của quý khách</span>

          </h3>


        </div>
        <Card/>
      </div>
    </>
  )
};

export default Cart;
