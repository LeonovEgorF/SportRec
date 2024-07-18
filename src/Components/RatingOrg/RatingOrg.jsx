import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { Box, IconButton } from "@mui/material";
import org from "../../mock/organization.json";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ContentTooltip from "./ContentTooltip/ContentTooltip";
import "./RatingOrg.scss";

export default function RatingOrg() {
  const { ratingOrg, listEditRating, statusRating } = org;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className="content-rating">
      <Tooltip
        title="Рейтинг"
        disableHoverListener
        arrow
        sx={{ "&:hover": { backgroundColor: "inherit" } }}
      >
        <IconButton onClick={handleClick} aria-describedby={id}>
          <Typography variant="body2" color="inherit">
            <svg>
              <use xlinkHref="#arrowUp"></use>
            </svg>
            <span>№{ratingOrg}</span>
          </Typography>
        </IconButton>
      </Tooltip>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <Paper
          sx={{
            right: "-10px",
            position: "relative",
            width: "260px",
            padding: "16px",
            backgroundColor: "#00000099",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <ContentTooltip
            listEditRating={listEditRating}
            statusRating={statusRating}
          />
        </Paper>
      </Popper>
    </div>
  );
}
