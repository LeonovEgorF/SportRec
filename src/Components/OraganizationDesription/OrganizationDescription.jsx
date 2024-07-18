import RatingOrg from "../RatingOrg/RatingOrg";
import TitleOrg from "../TitleOrg/TitleOrg";
import DirrectionsOrg from "../DirectionsOrg/DirrectionsOrg";
import CommunityOrg from "../CommunityOrg/CommunityOrg";
import AchivmentsOrg from "../AchivmentsOrg/AchivmentsOrg";
import TabsOrg from "../TabsOrg/TabsOrg";
import "./OrganizationDescription.scss";

export default function OrganizationDescription(props) {
  const {
    accreditation,
    countUSers,
    countFollowers,
    countLeagues,
    cityOrg,
    directions,
    achievements,
    title,
    logoOrg,
    flagCountry,
  } = props;
  return (
    <div className="description-org">
      <div className="description-org__header"></div>
      <div className="description-org__main">
        <div className="logo-content">
          <div className="logo-content__wrapper-img">
            <div className="logo-content__container-img">
              <div className="logo-content__logo-org">
                <img src={logoOrg} alt="logo organization" />
              </div>
              <div className="logo-content__flag-country">
                <img src={flagCountry} alt="flag country" />
              </div>
            </div>
          </div>
          <RatingOrg />
        </div>
        <div className="description-org__title-container">
          <TitleOrg title={title} accreditation={accreditation} />
        </div>
        <div className="description-org__directions-container">
          <DirrectionsOrg city={cityOrg} directions={directions} />
        </div>
        <div className="description-org__community">
          <CommunityOrg
            users={countUSers}
            followers={countFollowers}
            leagues={countLeagues}
          />
        </div>
        <div className="description-org__achivments">
          <AchivmentsOrg achievements={achievements} />
        </div>
        <div className="description-org__wrapper-btn">
          <button className="subscribe">Подписаться</button>
          <button className="more">Подробнее</button>
          <button className="share">
            <svg>
              <use xlinkHref="#share"></use>
            </svg>
          </button>
        </div>
        <div className="description-org__tabs">
          <TabsOrg />
        </div>
      </div>
    </div>
  );
}
