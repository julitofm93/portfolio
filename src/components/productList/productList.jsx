import "./productList.css"
import Product from "../product/product"
import {products} from "../../data.js"
const ProductList = () => {
    return(
        <div className="pl" id="proyectos">
            <div className="pl-texts">
                <h1 className="pl-title">MIS PROYECTOS</h1>
                <p className="pl-desc">
                Algunos de los proyectos que he realizado
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList