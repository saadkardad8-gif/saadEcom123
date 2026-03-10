import style from "./Home.module.css";
import { brands } from "../data/brands";
import {families}  from "../data/families"
export default function Home() {
  return (
    <section id="home" className={style.home}>
      <div className={style.slogan}>
        <h1>Bienvenue dans notre univers ecomApp</h1>
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
              brands.slice(0, 3).map((brand) => (
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
              families.slice(0, 3).map((fam) => (
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
  );
}