import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/976784.jpg?k=717a6a83ea61edb06017bb8c9bd3d36511ec0e1aef59ac94235584d4fd1709cb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>New York</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/976708.jpg?k=cb62481ca3494ac4e0b030345eedc77024732fb227f5642c773e5a11f534016c&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Myrtle Beach</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/976870.jpg?k=4bb231f86e973cac2971077b1664c1374fc0d718c95634b4cb01ae4550262f23&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Los Angeles</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/976919.jpg?k=b4d2dd3f87340b547a0e1aa9fc7e89b47ebe9539086c7f5f4e637e5e2137be7c&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Orlando</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
