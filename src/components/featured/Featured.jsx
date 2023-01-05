import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://respina24.ir/mag/wp-content/uploads/2022/03/kish-people-scaled.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>کیش</h1>
          <h3> 113 مورد هتل پیشنهادی</h3>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://hamgardy.com/Images/Uploaded/20170729111/Main/Hamgardi_0349zvzbc89.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>شیراز</h1>
          <h3> 173 مورد هتل پیشنهادی</h3>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://www.chetor.com/wp-content/uploads/2018/08/132629.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>تبریز</h1>
          <h3> 355 مورد هتل پیشنهادی</h3>
        </div>
      </div>
    </div>
  );
};
export default Featured;
