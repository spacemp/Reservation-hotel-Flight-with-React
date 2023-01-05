import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">هتل مرجان </span>
        <span className="fpCity">کیش </span>
        <span className="fpPrice">شروع قیمت 599 هزار تومان </span>
        <div className="fpRating">
          <button>8.9</button>
          <span>خیلی عالی</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">هتل کوروش </span>
        <span className="fpCity">تهران </span>
        <span className="fpPrice">شروع قیمت 999 هزار تومان </span>
        <div className="fpRating">
          <button>9.3</button>
          <span>فوق العاده</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://zoomlife.ir/uploads/posts/2020-07/1595167067-jainjas.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">اسپیناس هتل </span>
        <span className="fpCity">تهران </span>
        <span className="fpPrice">شروع قیمت 2 میلیون تومان </span>
        <div className="fpRating">
          <button>8.8</button>
          <span>خیلی خوب</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">ایران </span>
        <span className="fpCity">مشهد </span>
        <span className="fpPrice">شروع قیمت 899 هزار تومان </span>
        <div className="fpRating">
          <button>8.9</button>
          <span>عالی</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
