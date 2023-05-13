import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

const Cart = () => {
    return (
        <Link to='/cart'>
            <FontAwesomeIcon icon={faCartShopping} />
        </Link>
    )
}
export default Cart