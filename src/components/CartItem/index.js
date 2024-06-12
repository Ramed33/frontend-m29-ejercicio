import { ContainerCartItem, ImageCartItem, TitleCartItem, PriceCartItem, RemoveProduct } from "./styles";
import { removeFromCart } from "../../state/shoppingCart.slice";
import { useDispatch } from "react-redux";

const CartItem = ({data}) => {
    let {image,title,price,id} = data
    const dispatch = useDispatch();

    return (
        <ContainerCartItem>
            <ImageCartItem src={image} alt={title}/>
            <TitleCartItem>{title}</TitleCartItem>
            <PriceCartItem>$ {price}</PriceCartItem>
            <RemoveProduct onClick={() => dispatch(removeFromCart(id))}>Remove</RemoveProduct>
        </ContainerCartItem>
    );
};

export default CartItem;