"use client";

import { setCurrentTrack } from "@/store/features/playlistSlice";
import styles from "./Track.module.css";
import { TrackType } from "@/Types";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { durationFormat } from "@/lib/durationFormat";
import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { deleteFavoriteTracks, postFavoriteTracks, refreshToken } from "@/api/tracks";


export type PlaylistType = {
  track: TrackType;
  tracksData: TrackType[];
  isFavorite?: boolean;
};

export default function Track({ track, tracksData, isFavorite }: PlaylistType) {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const { user, token } = useUser();
  const { name, author, album, duration_in_seconds, id } = track;
  const isCurrentTrack = currentTrack ? currentTrack.id === id : false;
  const dispatch = useAppDispatch();
  const isLikedByUser = isFavorite || !!track.stared_user.find((arg) => arg.id === user?.id);
  const [isLiked, setIsLiked] = useState(isLikedByUser);

  const handleTrackClick = () => {
    dispatch(setCurrentTrack({ track, tracksData, isPlaying: true }));
  };

  useEffect(() => {
    const isLikedByUser = isFavorite || !!track.stared_user.find((arg) => arg.id === user?.id);
    setIsLiked(isLikedByUser);
  }, [track]);

  const handleLikeTrack = (e: React.MouseEvent<SVGUseElement>) => {
    e.stopPropagation();
    if (user?.email) {
      if (!isLiked) {
        postFavoriteTracks(track.id, token?.access!)
          .then((data) => {
            if (data.detail === "An error has occurred") {
              throw new Error("Лайк уже поставлен");
            }
            setIsLiked((prev) => !prev);
            if (currentTrack) {
              dispatch(
                setCurrentTrack({
                  track: { ...currentTrack, isLiked: !isLiked },
                  tracksData,
                  isPlaying: false,
                })
              );
            }
          })
          .catch((error) => {
            if (error.message === "401" && user) {
              refreshToken(token?.refresh!).then((data) => {
                postFavoriteTracks(track.id, data.access).then((data) => {
                  if (data.detail === "An error has occurred") {
                    throw new Error("Лайк уже поставлен");
                  }
                  setIsLiked((prev) => !prev);
                  if (currentTrack) {
                    dispatch(
                      setCurrentTrack({
                        track: { ...currentTrack, isLiked: !isLiked },
                        tracksData,
                        isPlaying: false,
                      })
                    );
                  }
                });
              });
            } else {
              console.log(error);
            }
          });
      } else {
        deleteFavoriteTracks(track.id, token?.access!)
          .then((data) => {
            if (data.detail === "An error has occurred") {
              throw new Error("Лайк уже убран");
            }
            setIsLiked((prev) => !prev);
            if (currentTrack) {
              dispatch(
                setCurrentTrack({
                  track: { ...currentTrack, isLiked: !isLiked },
                  tracksData,
                  isPlaying: false,
                })
              );
            }
          })
          .catch((error) => {
            if (error.message === "401" && user) {
              refreshToken(token?.refresh!).then((data) => {
                deleteFavoriteTracks(track.id, data.access).then((data) => {
                  if (data.detail === "An error has occurred") {
                    throw new Error("Лайк уже убран");
                  }
                  setIsLiked((prev) => !prev);
                  if (currentTrack) {
                    dispatch(
                      setCurrentTrack({
                        track: { ...currentTrack, isLiked: !isLiked },
                        tracksData,
                        isPlaying: false,
                      })
                    );
                  }
                });
              });
            } else {
              console.log(error);
            }
          });
      }
    } else {
      alert("Для добавления трека, пожалуйста авторизуйтесь");
    }
  };

  return (
    <div onClick={handleTrackClick} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
          {isCurrentTrack ? (
              <div
                className={classNames(styles.animation, {
                  [styles.trackTitleSvgPlaying]: isPlaying,
                })}
              ></div>
            ) : (
              <svg className={classNames(styles.trackTitleSvg)}>
                <use
                  xlinkHref={`/img/icon/sprite.svg#icon-note
              `}
                />
              </svg>
            )}
          </div>
          <div className={styles.trackTitleText}>
            <span className={styles.trackTitleLink}>
              {name} <span className={styles.trackTitleSpan} />
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>{author}</span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>{album}</span>
        </div>
        <div className={styles.trackTime}>
          <svg className={styles.trackTimeSvg}>
            <use
              className={classNames(
                styles.likeButton,
                isLiked && styles.activeLike
              )}
              onClick={handleLikeTrack}
              xlinkHref="/img/icon/sprite.svg#icon-like"
            />
          </svg>
          <span className={styles.trackTimeText}>
            {durationFormat(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}