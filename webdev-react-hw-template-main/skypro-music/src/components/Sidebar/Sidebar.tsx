import Image from "next/image";

export default function Sidebar() {
    return (
        <div className="main__sidebar sidebar">
          <div className="sidebar__personal">
            <p className="sidebar__personal-name">Sergey.Ivanov</p>
            <div className="sidebar__icon">
              <svg>
                <use xlinkHref="img/icon/sprite.svg#logout" />
              </svg>
            </div>
          </div>
          <div className="sidebar__block">
            <div className="sidebar__list">
              <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                  <Image
                    className="sidebar__img"
                    src="/img/playlist01.png"
                    alt="day's playlist"
                    width={113}
                    height={17} 
                  />
                </a>
              </div>
              <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                  <Image
                    className="sidebar__img"
                    src="/img/playlist02.png"
                    alt="day's playlist"
                    width={113}
                    height={17} 

                  />
                </a>
              </div>
              <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                  <Image
                    className="sidebar__img"
                    src="/img/playlist03.png"
                    alt="day's playlist"
                    width={113}
                    height={170} 

                  />
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}