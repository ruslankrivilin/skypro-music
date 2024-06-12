'use client'

import styles from "./Filters.module.css";
import FilterItem from "./FilterItem/FilterItem";
import { useState } from "react";
import { filters, order } from "./data";
import { TrackType } from "@/Types";
import { useAppSelector } from "@/hooks";



export default function Filters({ tracksData }: { tracksData: TrackType[] }) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const authorsList = useAppSelector(
    (state) => state.playlist.filterOptions.author
  );
  const genreList = useAppSelector(
    (state) => state.playlist.filterOptions.genre
  );

  const filterList = (value: string) => {
    if (value === filters[0].title) {
      return authorsList;
    } else if (value === filters[1].title) {
      return genreList;
    } else {
      return order;
    }
  };

  function handleFilterClick(newFilter: string) {
    setActiveFilter((prev) => prev === newFilter ? null : newFilter)
  }
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>
        Искать по:
      </div>

      {filters.map((filter) => (
        <FilterItem
          key={filter.title}
          list={filterList(filter.title)}
          isOpened={activeFilter === filter.title}
          handleFilterClick={handleFilterClick}
          title={filter.title}
          value={filter.value}
          tracksData={tracksData}
        />
      ))}

    </div>
  )
}