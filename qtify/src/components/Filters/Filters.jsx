import React from "react";
import { Tabs, Tab } from "@mui/material";
import styles from "./Filters.module.css";

export default function Filters({
  filters,
  selectedFilterIndex,
  setSelectedFilterIndex,
}) {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--color-primary)", // your custom CSS variable
          },
        }}
      >
        {filters.map((filter, index) => (
          <Tab
            key={index}
            className={styles.tab}
            label={filter.label}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
    </div>
  );
}
