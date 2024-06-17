'use client';

import classNames from "classnames";
import styles from "./FilterItem.module.css";
import { TrackType } from "@/Types";
import { order } from "../data";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setFilters } from "@/store/features/playlistSlice";
import { useEffect, useState } from "react";


type FilterItemType = {
  title: string;
  value: "author" | "genre" | "order";
  handleFilterClick: (newFilter: string) => void;
  isOpened: boolean;
  optionList: string[] | string;
};

export default function FilterItem({
  handleFilterClick,
  title,
  value,
  isOpened,
  optionList,
}: FilterItemType) {
  const authorsList = useAppSelector(
    (state) => state.playlist.filterOptions.order
  )
  const dispatch = useAppDispatch();
  const [filterNumber, SetFilterNumber] = useState<number>(0);
  const tracksData = useAppSelector((state) => state.playlist.initialTracks);

  const getFilterList = () => {
    if (value !== "order") {
      const array = new Set(tracksData?.map((track: TrackType) => track[value]) || []);
      return Array.from(array)
    }

    return order
  };

  const toggleFilter = (item: string) => {
    if (value !== "order" && optionList && optionList instanceof Array) {
      dispatch(
        setFilters({
          [value]: optionList.includes(item)
            ? optionList.filter((el) => el !== item)
            : [...optionList, item],
        })
      );
    } else {
      dispatch(setFilters({ order: item }));
    }
  };

  useEffect(() => {
    if (value !== "order" && optionList) SetFilterNumber(optionList.length);
  }, [optionList, value]);

  getFilterList();

  return (
    <>
      <div className={styles.wrapper}>
        <div
          onClick={() => handleFilterClick(title)}
          className={classNames(styles.filterButton, styles.BtnText, {
            [styles.active]: isOpened,
          })}
        >
          {title}
        </div>
        {filterNumber > 0 && (
          <div className={styles.filterNumber}>{filterNumber}</div>
        )}
        {isOpened && (
          <div className={styles.activeFilterContainer}>
            <ul className={classNames(styles.activeFilter)}>
              {getFilterList().map((item) => (
                <li
                  onClick={() => toggleFilter(item)}
                  key={item}
                  className={classNames({
                    [styles.SelectedFilter]:
                      value === "order"
                        ? item === optionList
                        : optionList.includes(item),
                  })}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
