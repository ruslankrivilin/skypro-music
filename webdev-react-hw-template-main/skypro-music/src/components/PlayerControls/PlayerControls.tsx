import { PlayerControlsType } from "@/Types";
import styles from "./PlayerControls.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  setIsPlaying,
  setIsShuffle,
  setNextTrack,
  setPreviousTrack,
} from "@/store/features/playlistSlice";
import classNames from "classnames";

export default function PlayerControls({
  togglePlay,
  isPlaying,
  isLooping,
  toggleLoop,
}: PlayerControlsType) {
  const isShuffle = useAppSelector((state) => state.playlist.isShuffle);
  const dispatch = useAppDispatch();
  const handleNextTrack = () => {
    dispatch(setNextTrack());
    dispatch(setIsPlaying(true));
  };
  const handlePreviousTrack = () => {
    dispatch(setPreviousTrack());
    dispatch(setIsPlaying(true));
  };
  const handleShuffle = () => {
    dispatch(setIsShuffle(!setIsShuffle));
  };

  return (
    <div className={styles.playerControls}>
      <div onClick={handlePreviousTrack} className={classNames(styles.playerBtnPrev, styles.btn)}>
        <svg className={styles.playerBtnPrevSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles.btn)}>
        <svg className={styles.playerBtnPlaySvg}>
          <use
            xlinkHref={`/img/icon/sprite.svg#${isPlaying ? "icon-pause" : "icon-play"
              }`}
          />
        </svg>
      </div>
      <div onClick={handleNextTrack} className={classNames(styles.playerBtnNext, styles.btn)}>
        <svg className={styles.playerBtnNextSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div onClick={toggleLoop} className={classNames(styles.playerBtnRepeat, styles.btnIcon)}>
        <svg className={styles.playerBtnRepeatSvg}>
          <use
            xlinkHref={`/img/icon/sprite.svg#${isLooping ? "icon-repeat-toggled" : "icon-repeat"
              }`}
          />
        </svg>
      </div>
      <div onClick={handleShuffle} className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
        <svg className={styles.playerBtnShuffleSvg}>
          <use
            xlinkHref={`/img/icon/sprite.svg#${isShuffle ? "icon-shuffle-toggled" : "icon-shuffle"
              }`}
          />
        </svg>
      </div>
    </div>
  );
}
