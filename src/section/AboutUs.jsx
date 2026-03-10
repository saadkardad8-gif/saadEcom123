import style from "./About.module.css"
import { brands } from "../data/brands";
import {families} from "../data/families"

export default function About() {
return(
<section id="AboutUs" className={style.About}>
    <div className={style.slogan}>
        <h1>About de nous</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            delectus nemo odit dolorum. Aliquid illo debitis cupiditate accusamus
            ad magni voluptate ex facere veritatis ipsa animi, nobis dolore
            repellendus quae ut iste inventore cum maxime labore aspernatur
            repudiandae magnam, architecto, cumque omnis. Nostrum ducimus animi,
            quis commodi reiciendis tempora vero.
        </p>
    </div>
    <div className={style.news}>
        <div>
            <h1>Nos meilleures marques </h1>
            <div className={style.grid}>
                {
                brands.map((brand) => (
                <div key={brand.id} className={style.card}>
                    <img src={brand.image} alt={brand.name} />
                    <h3>{brand.name}</h3>
                </div>
                ))
                }
            </div>

        </div>
        <div>
                        
            <h1>Nos meilleures marques </h1>
            <div className={style.grid}>
                {
                families.map((fam) => (
                <div key={fam.id} className={style.card}>
                    <img src={fam.image} alt={fam.name} />
                    <h3>{fam.name}</h3>
                </div>
                ))
                }
            </div>
        </div>
    </div>

</section>
)
}
