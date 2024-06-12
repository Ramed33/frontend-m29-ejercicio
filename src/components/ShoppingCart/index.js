import { useSelector } from "react-redux";
import CartItem from "../CartItem";
import { ContainerCart, AppHeader } from "./styles";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart);

    return (
        <article>
            <AppHeader>
                <h1>E commerce</h1>
                <Link to="/">
                    <h4>Home</h4>
                </Link>
            </AppHeader>
            <h2>Cart</h2>
            <ContainerCart>
                {
                    cart.map((product) => 
                        <CartItem 
                            key={product.id} 
                            data={product} 
                        />
                )}
            </ContainerCart>
        </article>
    )
}

export default ShoppingCart;