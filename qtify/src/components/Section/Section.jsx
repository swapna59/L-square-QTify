import React, { useState, useEffect } from "react";
import styles from "./Section.module.css";
import Filters from "../Filters/Filters";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

export default function Section({ title, data, filterSource, type }) {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const genres = response.data || []; // ✅ response is already .data
        setFilters((prevFilters) => [...prevFilters, ...genres]);
      });
    }
  }, [filterSource]);

  const showFilters = filters.length > 1;

  const cardToRender = data.filter(
    (card) =>
      showFilters && selectedFilterIndex !== 0
        ? card.genre.key === filters[selectedFilterIndex].key
        : true // ✅ must return boolean
  );

  return (
    <div className={styles.header}>
      <h3>{title}</h3>
      <h4 className={styles.toggleText} onClick={handleToggle}>
        {!carouselToggle ? "Collapse All" : "Show All"}
      </h4>

      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}

      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {cardToRender.map((item, index) => (
                <Card key={item.id || index} data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={cardToRender}
              renderComponent={(data, index) => (
                <Card key={data.id || index} data={data} type={type} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
}
