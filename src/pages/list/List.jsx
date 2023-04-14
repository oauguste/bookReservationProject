import "./List.css";

import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
// import Featured from "../../components/featured/Featured";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(
    location.state.destination
  );
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);

  const [options, setOptions] = useState(
    location.state.options
  );
  return (
    <div>
      <NavBar></NavBar>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input
                type="text"
                placeholder={destination}
              />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span
                onClick={() => {
                  setOpenDate(!openDate);
                }}
              >{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) =>
                    setDate([item.selection])
                  }
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>

              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input
                    type="Number"
                    className="lsOptionInput"
                  ></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input
                    type="Number"
                    className="lsOptionInput"
                  ></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adult
                  </span>
                  <input
                    min={1}
                    type="Number"
                    className="lsOptionInput"
                    placeholder={options.adult}
                  ></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input
                    min={0}
                    type="Number"
                    className="lsOptionInput"
                    placeholder={options.children}
                  ></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room(s)
                  </span>
                  <input
                    min={1}
                    type="Number"
                    className="lsOptionInput"
                    placeholder={options.room}
                  ></input>
                </div>
              </div>
            </div>
            <button className="lsButtonSearch">
              Search
            </button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
