import "./TabsOrg.scss";
import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
export default function TabsOrg() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} textColor="inherit">
      <Tab label="Соревнования" />
      <Tab label="Результаты" />
      <Tab label="Новости" />
    </Tabs>
  );
}
