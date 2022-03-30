import "./productList.css"
import Product from "../product/product"
import {products} from "../../data.js"
const ProductList = () => {
    return(
        <div className="pl" id="proyectos">
            <div className="pl-texts">
                <h2 className="pl-title">Projects</h2>
                <p className="pl-desc">
                Here are some projects I have worked on
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} data={item.data} title={item.title} repo={item.repo}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList