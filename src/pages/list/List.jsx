import "./List.css";

import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
// import Featured from "../../components/featured/Featured";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(
    location.state.destination
  );
  const [date, setDate] = useState(location.state.date);

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
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
            </div>
            <div className="lsItem">
              <label>Destination</label>
              <input
                type="text"
                placeholder={destination}
              />
            </div>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" />
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
