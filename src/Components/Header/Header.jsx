import "./Header.scss";
import logo from "../../assets/logo.png";
import nav from "./nav.json";
import { NavLink } from "react-router-dom";
import SelectCustom from "../../widgets/SelectCustom/SelectCustom";
import user from "../../mock/user.json";
import ru from "../../assets/ru.png";
import eng from "../../assets/eng.png";
import { Container } from "@mui/material";

export default function Header() {
  return (
    <Container>
      <header className="header">
        <div className="header__logotip">
          <img src={logo} alt="logo" />
        </div>
        <nav className="header__nav">
          {nav.map((item) => (
            <NavLink key={item.id} to={item.path}>
              <svg>
                <use xlinkHref={`#${item.path}`}></use>
              </svg>
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>
        <div className="header__lang">
          <SelectCustom
            options={[
              {
                value: "ru",
                label: "Ru",
                image: ru,
              },
              {
                value: "en",
                label: "En",
                image: eng,
              },
            ]}
            type="lang"
          />
        </div>
        <div className="header__notices">
          {user.notices && <div className="header__dots"></div>}
          <svg>
            <use xlinkHref="#notices"></use>
          </svg>
        </div>
        <div className="header__profile">
          <SelectCustom
            options={[
              {
                value: "exit",
                label: "Выход",
                avatar: user.avatar,
              },
            ]}
            type="avatar"
          />
        </div>
      </header>
    </Container>
  );
}
