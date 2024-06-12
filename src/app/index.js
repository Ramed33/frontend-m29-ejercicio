import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingProducts from "../components/ShoppingProducts";
import ShoppingCart from "../components/ShoppingCart";

function App() {
  return(
    <article>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <ShoppingProducts /> }></Route>
                <Route path="/cart" element={ <ShoppingCart /> }></Route>
            </Routes>
        </BrowserRouter>
    </article>
  )
};

export default App;