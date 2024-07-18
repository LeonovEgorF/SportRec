import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import "./TitleOrg.scss";

export default function TitleOrg({ title, accreditation }) {
  return (
    <div className="title-organization">
      <h2 className="title-organization__content">{title}</h2>
      {accreditation && (
        <div className="verificate-content">
          <Tooltip
            title="Организация прошла аккредитацию"
            placement="top"
            arrow
            sx={{ backgroundColor: "red" }}
          >
            <svg>
              <use xlinkHref="#verificate"></use>
            </svg>
          </Tooltip>
        </div>
      )}
    </div>
  );
}
