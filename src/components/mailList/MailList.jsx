import "./MailList.css";

const MailList = () => {
  return (
    <div className="mailList">
      <h1 className="mailTitle">Save time, save money</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className=" ">
        <input
          type="text"
          placeholder="Your email address"
        />
        <button className="mailButton">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
