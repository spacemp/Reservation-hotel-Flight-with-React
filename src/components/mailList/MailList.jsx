import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">مدیریت هزینه برای زمان شما ! پول شما !</h1>
      <span className="mailDesc">
        ثبت نام کنید و ما بهترین تخفیفات را برای شما ارسال خواهیم کرد
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="آدرس ایمیل" />
        <button>ثبت </button>
      </div>
    </div>
  );
};

export default MailList;
