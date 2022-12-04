import React from "react";
import { useState } from "react";
import { FILTERS } from "../utils";
import "../styles/index.css";

const Header = ({
  heading,
  subHeading,
  showFilters,
  filterBooks,
}: {
  heading: any;
  subHeading: any;
  showFilters?: any;
  filterBooks?: any;
}) => {
  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0].label);
  const [searchText, setSearchText] = useState("");
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const applyFilters = () => {
    filterBooks(selectedFilter, searchText);
    setShowFilterOptions(false);
  };

  const resetFilters = () => {
    filterBooks();
    setSelectedFilter(FILTERS[0].label);
    setSearchText("");
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="text-4xl font-extrabold">{heading}</h1>
          <p className="text-base mt-2 text-slate-400">{subHeading}</p>
        </div>
        {showFilters ? (
          <div className="flex flex-row items-center">
            {showFilterOptions ? (
              <div className="flex flex-row items-center">
                <div>
                  Filter By:
                  <select
                    id="Fitler By: "
                    onChange={(item: any) =>
                      setSelectedFilter(item.id.toString())
                    }
                    // options={FILTERS}
                    //renderInput={(params) => <TextField {...params} label="" />}
                  >
                    {FILTERS.map((filter) => (
                      <option value={filter.id}>{filter.label}</option>
                    ))}
                  </select>
                </div>
                <div className="ml-3">
                  <input
                    name="searchText"
                    value={searchText}
                    onBlur={function noRefCheck() {}}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
                <div className="ml-3">
                  <button
                    onClick={applyFilters}
                    //size="large"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-row items-center">
                <div>
                  <button
                    onClick={() => setShowFilterOptions(true)}
                    // size="large"
                  >
                    Add Filters
                  </button>
                </div>
                {searchText.length > 0 && (
                  <div>
                    <button
                      onClick={resetFilters} //size="large"
                    >
                      Reset
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Header;
