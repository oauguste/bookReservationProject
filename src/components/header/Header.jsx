import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import format from "date-fns/format";
const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i"
            ? options[name] + 1
            : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list"
            ? "headerContainer listMode"
            : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            {" "}
            <h1 className="headerTitle">
              Save 15% or more on stays
            </h1>
            <p className="headerDesc">
              From weekend breaks to beach escapes, discover
              dream destinations for less
            </p>
            <button className="headerButton">
              Find Getaway Deals
            </button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  className="headerIcon"
                  icon={faBed}
                />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  className="headerIcon"
                  icon={faCalendarDays}
                />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenDate(!openDate)}
                >
                  {`${format(
                    date[0].startDate,
                    "MM/dd/yyyy"
                  )} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) =>
                      setDate([item.selection])
                    }
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  className="headerIcon"
                  icon={faPerson}
                />
                <span
                  className="headerSearchText"
                  onClick={() =>
                    setOpenOptions(!openOptions)
                  }
                >
                  {`${options.adult} adult |  ${options.children} children | ${options.room} room`}
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">
                          Adults
                        </span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() =>
                              handleOption("adult", "d")
                            }
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() =>
                              handleOption("adult", "i")
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">
                          Children
                        </span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                            onClick={() =>
                              handleOption("children", "d")
                            }
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() =>
                              handleOption("children", "i")
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">
                          Rooms
                        </span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() =>
                              handleOption("room", "d")
                            }
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() =>
                              handleOption("room", "i")
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </span>
              </div>
              <button className="headerButton">
                Seach
              </button>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
