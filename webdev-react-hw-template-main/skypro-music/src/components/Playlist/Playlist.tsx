import Track from "../Track/Track";

export default function Playlist() {
    return(
        <div className="centerblock__content playlist-content">
            <div className="content__title playlist-title">
              <div className="playlist-title__col col01">Трек</div>
              <div className="playlist-title__col col02">Исполнитель</div>
              <div className="playlist-title__col col03">Альбом</div>
              <div className="playlist-title__col col04">
                <svg className="playlist-title__svg">
                  <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                </svg>
              </div>
            </div>
            <div className="content__playlist playlist">
              <Track/>
            </div>
          </div>
    )
}