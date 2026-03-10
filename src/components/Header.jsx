import style from "./Header.module.css";
export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.logo}>ecom app</div>

            <nav className={style.nav}>
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                <a href="#AboutUs">AboutUs</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}