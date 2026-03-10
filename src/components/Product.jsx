import style from "./Product.module.css"

export default function Product({product}){
    return (
        <div className={style.product}>
            <img src={product.image} alt="{product.ref}" />
            <h4>{product.ref}</h4>
            <p>
                <del>{product.price} Dh</del>,
                <strong>{product.promo} Dh</strong>
            </p>
             <ul>
                {/* <li>Brand  : {product.brand}</li>
                <li>Family : {product.family}</li> */}

             </ul>
        </div>
    )
}