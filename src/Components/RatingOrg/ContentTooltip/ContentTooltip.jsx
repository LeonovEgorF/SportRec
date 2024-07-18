import React from "react";
import "./ContentTooltip.scss";
export default function ContentTooltip({ listEditRating, statusRating }) {
  return (
    <div className="tooltip">
      <h2 className="tooltip__title">Изменение места в рейтинге</h2>
      <div className="tooltip__list">
        {listEditRating.map((item) => (
          <div className="tooltip__item" key={item.id}>
            <div className="tooltip__list-date">{item.dateEdit}</div>
            <div className="tooltip__caunt">
              {item.upRating ? (
                <svg>
                  <use xlinkHref="#arrowUp"></use>
                </svg>
              ) : (
                <svg>
                  <use xlinkHref="#arrowDown"></use>
                </svg>
              )}
              <span>{item.cauntRating}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="tooltip__result-rating">Рейтинг: {statusRating}</div>

      <div className="tooltip__descr-result-rating">
        <p>
          Спортсмены организации показывают достаточно хорошие результаты на
          тренировках и соревнованиях.
        </p>
      </div>
    </div>
  );
}
