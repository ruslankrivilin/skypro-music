import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="main__nav nav">
          <div className="nav__logo logo">
            <Image 
            alt="Скайпро-музыка.логотип" 
            className="logo__image" 
            src="/img/logo.png"
            width={113}
            height={17} 
            />
          </div>
          <div className="nav__burger burger">
            <span className="burger__line" />
            <span className="burger__line" />
            <span className="burger__line" />
          </div>
          <div className="nav__menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Главное
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Мой плейлист
                </a>
              </li>
              <li className="menu__item">
                <Link href="/signin" className="menu__link">
                  Выйти
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    )
}