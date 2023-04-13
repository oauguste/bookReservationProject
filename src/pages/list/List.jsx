import "./List.css";

import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
// import Featured from "../../components/featured/Featured";

const List = () => {
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
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" />
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
