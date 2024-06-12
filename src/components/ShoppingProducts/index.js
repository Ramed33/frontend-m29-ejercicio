import ProductItem from "../ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { TitleProduct, ContainerProduct, AppHeader } from "./styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {getProducts} from '../../state/shoppingProducts.slice'
import StatusCode from "../../state/statusCode";

const ShoppingProducts = () => {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products);
    const cartProducts = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    if (status === StatusCode.LOADING){
        return <p>Loading...</p>
    }

    if (status === StatusCode.ERROR){
        return <p>Something went wrong!!! Try again later</p>
    }

    return (
        <article>
            <AppHeader>
                <h1>E commerce</h1>
                <Link to="/cart">
                    <h4>Cart<big> {cartProducts.length}</big></h4>
                </Link>
            </AppHeader>
            <TitleProduct>Products</TitleProduct>
            <ContainerProduct>
                {
                    products.map(product => (
                        <ProductItem 
                            key={product.id} 
                            data={product}
                        />
                    ))
                }
            </ContainerProduct>
        </article>
    )
}

export default ShoppingProducts;