'use client'

import styles from "./Filters.module.css";
import FilterItem from "./FilterItem/FilterItem";
import { useState } from "react";
import { filters } from "./data";
import { TrackType } from "@/Types";



export default function Filters({ tracksData }: { tracksData: TrackType[] }) {
  const [actieFilter, setActiveFilter] = useState<string | null>(null);
  function handleFilterClick(newFilter: string) {
    setActiveFilter((prev) => prev === newFilter ? null : newFilter)
  }
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>
        Искать по:
      </div>

      <FilterItem
        isOpened={actieFilter === filters[0].title}
        handleFilterClick={handleFilterClick}
        title={filters[0].title}
        value={filters[0].value}
        tracksData={tracksData}
      />

      <FilterItem
        isOpened={actieFilter === filters[1].title}
        handleFilterClick={handleFilterClick}
        title={filters[1].title}
        value={filters[1].value}
        tracksData={tracksData}
      />

      <FilterItem
        isOpened={actieFilter === filters[2].title}
        handleFilterClick={handleFilterClick}
        title={filters[2].title}
        value={filters[2].value}
        tracksData={tracksData}
      />

    </div>
  )
}