import React from "react";
import "./ModalArticle.css";
import CloseIcon from "@mui/icons-material/Close";

export default function ModalArticle({
  onClick,
  articleBoxInformation,
  articleModalInformation,
}) {
  console.log(articleBoxInformation);
  return (
    <div className="overlay-modal">
      <div className="modal-article-wrapper">
        <div className="position-relative d-flex justify-content-center align-items-center flex-column">
          <img src={articleBoxInformation.image} alt="" />
          <button className="close-article-btn" onClick={onClick}>
            <CloseIcon />
          </button>
          <div>
            <h1>{articleBoxInformation.title}</h1>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <ul className="d-flex gap-3">
            <li>
              نویسنده:
              <span> {articleModalInformation.writter} </span>
            </li>
            <li>
              تاریخ:
              <span> {articleModalInformation.date} </span>
            </li>
            <li>
              دسته بندی:
              <span> {articleModalInformation.category} </span>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h2>{articleModalInformation.descriptionTitle}</h2>
          <p>{articleModalInformation.mainDescription}</p>
          <h3>{articleModalInformation.subDescriptionTitleFirst}</h3>
          <p>{articleModalInformation.subDescriptionFirst}</p>
          <h3>{articleModalInformation.subDescriptionTitleSecond}</h3>
          <p>{articleModalInformation.subDescriptionSecond}</p>
          <h3>{articleModalInformation.subDescriptionTitleThird}</h3>
          <p>{articleModalInformation.subDescriptionThird}</p>
        </div>
      </div>
    </div>
  );
}
