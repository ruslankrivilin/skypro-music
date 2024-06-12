'use client';

import classNames from "classnames";
import styles from "./FilterItem.module.css";
import { FilterItemType, TrackType } from "@/Types";
import { order } from "../data";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setFilters } from "@/store/features/playlistSlice";
import { useEffect, useState } from "react";



export default function FilterItem({
  handleFilterClick,
  title,
  value,
  isOpened,
  tracksData,
  list,
}: FilterItemType) {
  const authorsList = useAppSelector(
    (state) => state.playlist.filterOptions.order
  )
  const dispatch = useAppDispatch();
  const [filterNumber, SetFilterNumber] = useState<number>(0);
  const getFilterList = () => {
    if (value !== "order") {
      const array = new Set(tracksData?.map((track: TrackType) => track[value]) || []);
      return Array.from(array)
    }

    return order
  };

  const toggleFilter = (item: string) => {
    dispatch(
      setFilters({
        author: list.includes(item) ? list.filter((el) => el !== item) : [...list, item],
      })
    );

    if (list === order) {
      dispatch(
        setFilters({
          [value]: authorsList === item ? "По умолчанию" : item,
        })
      );
    }
  };

  useEffect(() => {
    SetFilterNumber(
      value === "order"
        ? authorsList === "Сначала новые" || authorsList === "Сначала старые"
          ? 1
          : 0
        : list.length
    );
  }, [list, authorsList, value]);

  getFilterList();

  return (
    <>
      {isOpened ? (
        <div>
          <div className={styles.titleFilterBox}>
          <div
            onClick={() => handleFilterClick(title)}
            className={classNames(styles.filterButton, styles.activeFilter, styles.btnText)}
          >
            {title}
          </div>
          {filterNumber > 0 ? (
              <div className={styles.filterNumber}>{filterNumber}</div>
            ) : null}
            </div>
          <div className={styles.listContainer}>
            <ul className={styles.listBox}>
              {getFilterList().map((item) => (
                <li onClick={() => toggleFilter(item)} key={item} className={styles.listText}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.titleFilterBox}>
        <div
          onClick={() => handleFilterClick(title)}
          className={classNames(styles.filterButton, styles.btnText)}
        >
          {title}
        </div>
        {filterNumber > 0 ? (
            <div className={styles.filterNumber}>{filterNumber}</div>
          ) : null}
        </div>
      )}
    </>
  );
}