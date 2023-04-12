import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="PlistItem">
        <img
          className="plistImg"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1"
          alt=""
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 Address</h2>
        </div>
      </div>
      <div className="PlistItem">
        <img
          className="plistImg"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=b984c542b8b1a2ee0e019e4491da338a85b660caa10c5e1197225c5f3052d629&o=&s=1"
          alt=""
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>233 Address</h2>
        </div>
      </div>
      <div className="PlistItem">
        <img
          className="plistImg"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1"
          alt=""
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>309 Address</h2>
        </div>
      </div>
      <div className="PlistItem">
        <img
          className="plistImg"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
          alt=""
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>4433 Address</h2>
        </div>
      </div>
      <div className="PlistItem">
        <img
          className="plistImg"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1"
          alt=""
        />
        <div className="pListTitles">
          <h1>AirBNB</h1>
          <h2>2233 Address</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
