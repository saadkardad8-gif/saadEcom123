import style from "./Products.module.css"
import {products} from "../data/products"
import Product  from "../components/Product"
export default function Products(){
    return(
        <section id="products">
            <div className="{style.grid}">
                <h2>Nos Produits</h2>
                {
                    products.map(p=> (<Product key={p.id} product={p}/>))
                }
            </div>
        </section>
    )
}