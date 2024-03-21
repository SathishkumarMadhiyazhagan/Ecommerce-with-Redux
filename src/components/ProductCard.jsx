import { useDispatch, useSelector } from "react-redux";
import "../css/ProductCard.css";
import { add, remove } from "../store/cartSlice";
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartState.cartList)
  const [isCartAdded, setIsCartAdded] = useState(false);
  const {id, name, price, image} = product;

  useEffect(() => {
    const button = cartList.find(element => element.id === id)
    if(button) {
      setIsCartAdded(true);
    } else {
      setIsCartAdded(false)
    }
  }, [cartList, id])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isCartAdded ? (<button style={{"backgroundColor": "red"}} onClick={()=> dispatch(remove(product))}>Remove</button>) : (<button onClick={()=> dispatch(add(product))}>Add To Cart</button>)}
      </div>
    </div>
  )
}
