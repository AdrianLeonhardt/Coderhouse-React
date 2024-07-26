import {MdOutlineShoppingCart} from "react-icons/md"
function CartWidget() {
  return (
    <div className="carrito">
      <MdOutlineShoppingCart size="40px"/>
      <span className="numerito">3</span>
    </div>
  )
}

export default CartWidget