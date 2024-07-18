import "./CommunityOrg.scss";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function CommunityOrg({ users, followers, leagues }) {
  return (
    <div className="community">
      <div className="community__avatar">
        <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
          <Avatar
            alt="Remy Sharp"
            src="./img/avatar1.png"
            sx={{ width: "22px", height: "22px" }}
          />

          <Avatar
            alt="Travis Howard"
            src="./img/avatar2.png"
            sx={{ width: "22px", height: "22px" }}
          />
          <Avatar
            alt="Cindy Baker"
            src="./img/avatar3.png"
            sx={{ width: "22px", height: "22px" }}
          />
        </AvatarGroup>
      </div>
      <div className="community__statistic">
        <p className="community__item">
          {users}
          <span>Спортсменов</span>
        </p>
        <p className="community__item community__item_dots ">
          {followers}
          <span>Подписчиков</span>
        </p>
        <p className="community__item community__item_dots">
          {leagues}
          <span>Лиг</span>
        </p>
      </div>
    </div>
  );
}
