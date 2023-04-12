import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          Aparthole Stare Miasto
        </span>
        <span className="fpCity">Poland</span>
        <span className="fpPrice">Starting from $122</span>
        <div className="rating">
          <button className="fpButton">8.6</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          7Seasons Apartments Budapest
        </span>
        <span className="fpCity">Hungary</span>
        <span className="fpPrice">Starting from $173</span>
        <div className="rating">
          <button className="fpButton">8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323cf3e030ae6b41c8b475fe2853ae4e9e38148501d68dd5b915905dcea664&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          Cheval Three Quays at The Tower of London
        </span>
        <span className="fpCity">London</span>
        <span className="fpPrice">Starting from $779</span>
        <div className="rating">
          <button className="fpButton">9.6</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=f3889222c82f4a8e3783dddb5f1cc04d6140eeb2d5cb8297817a15aacfe4d191&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          3 Epoques Apartments by Prague Residences
        </span>
        <span className="fpCity">Prague</span>
        <span className="fpPrice">Starting from $122</span>
        <div className="rating">
          <button className="fpButton">8.7</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
