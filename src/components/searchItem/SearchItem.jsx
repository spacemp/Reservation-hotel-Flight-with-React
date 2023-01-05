import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">هتل ساحلی</h1>
        <span className="siDistance">100 متر تا دریا</span>
        <span className="siTaxiOp">ترانسفر فرودگاهی</span>
        <span className="siSubtitle">اتاق رو به دریا با هواساز</span>
        <span className="siFeatures">2 تخت جدا از هم</span>
        <span className="siCancelOp">کنسلی مجانی </span>
        <span className="siCancelOpSubtitle">
          شما میتوانید بعدا کنسل کنید فقط همین امروز با نرخ استثنای موجود است
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>عالی</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">1599 تومان</span>
          <span className="siTaxOp"> همراه با مالیات</span>
          <button className="siCheckButton">چک کن </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
