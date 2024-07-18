import "./DirectionsOrg.scss";
export default function DirrectionsOrg({ city, directions }) {
  return (
    <div className="directions">
      <div className="directions__city">
        <svg>
          <use xlinkHref="#geo"></use>
        </svg>
        <span className="directions__text-city">{city}</span>
      </div>
      <ul className="directions__list">
        {directions.map((item, index) => (
          <li className="directions__item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
