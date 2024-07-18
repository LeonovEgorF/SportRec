import "./AchivmentsOrg.scss";

export default function AchivmentsOrg({ achievements }) {
  return (
    <div className="achivments">
      {achievements.map((item) => (
        <div key={item.id} className="achivments__item">
          <div className={`achivments__circle ${item.name}`}></div>
          <div>{item.count}</div>
        </div>
      ))}
    </div>
  );
}
