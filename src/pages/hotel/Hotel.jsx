import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import "./Hotel.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280947638.jpg?k=28d6f3d93337dccf4fd7b25369fb6cb6a51818b1e359af9b60ea5c29c913726d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280950730.jpg?k=c3c5db2ee129e9dd588eddc4cd90e6e6f66aaaa2a5edeba1511a006725a282aa&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280950300.jpg?k=74a8a728f93477fc0bb88335a9f5c44d672c67b23f6df7764cee05a93f27f671&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280950292.jpg?k=89e3a95397a8c8f6dd345dbc1a7ea668d2ebd05c5953c856c0dc741d4e714ef5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280950287.jpg?k=ec7cf222e55bc51b78780a58505bfb7f9e9999c928de818ad54ada322fa1ce3d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280950255.jpg?k=4d035d2861195be3bbe43f750d1681265cdca42eabb634010cd36c0e42c833d1&o=&hp=1",
    },
  ];
  return (
    <div>
      <NavBar />
      <Header type={"list"} />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="hotelButton">
            Reserve or Book Now
          </button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125, Old Town, Poland</span>
          </div>

          <span className="hotelDistance">
            Excellent Location - 500m from center
          </span>

          <span className="hotelPriceHighlight">
            Book a stay over $122 at this property and get a
            free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">
                Lorem ipsum, dolor sit amet consectetur
                adipisicing.
              </h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Temporibus nisi accusamus,
                pariatur dignissimos ipsa cum nihil
                quibusdam! Deserunt laboriosam recusandae
                minus dolor quaerat quos provident modi
                error, nulla quisquam et esse veniam, vitae
                ratione at! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Sunt commodi,
                excepturi quia vitae nulla culpa.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <span>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Libero hic officia
                officiis dignissimos beatae, atque minus
                deleniti.
              </span>
              <h2>
                <b>$988</b> (9 nights)
              </h2>
              <button>Book or Reserve Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
