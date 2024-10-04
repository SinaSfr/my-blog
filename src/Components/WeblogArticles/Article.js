import React from "react";
import "./Article.css";
import ArticleDatas from "../../datas/ArticleDatas";


export default function Article({ onClick }) {
  return (
    <>
      {ArticleDatas.map((data) => (
        <div key={data.articleBoxInformation.id} className="article-box">
          <div className="position-relative">
            <img src={data.articleBoxInformation.image} alt="" className="text-white" onClick={() => onClick(data)}/>
            <p className="article-box-date">{data.articleBoxInformation.date}</p>
          </div>
          <div className="article-box-information">
            <h3 onClick={() => onClick(data)}>{data.articleBoxInformation.title}</h3>
            <p>{data.articleBoxInformation.summary}</p>
            <span className="text-white fs-7">{data.articleBoxInformation.opinion}</span>
          </div>
        </div>
      ))}
    </>
  );
}
