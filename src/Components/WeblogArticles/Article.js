import React from "react";
import "./Article.css";
import ArticleData from "../../datas/ArticleData";

export default function Article() {
  return (
    <>
      {ArticleData.map((data) => (
        <div className="article-box">
          <div className="position-relative">
            <img src="../../Main-img/OIP.jfif" alt="" className="text-white" />
            <p className="article-box-date">28 آذر</p>
          </div>
          <div className="article-box-information">
            <h3>سئو چیست؟</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <span className="text-white fs-7">بدون دیدگاه</span>
          </div>
        </div>
      ))}
    </>
  );
}
