import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./RootLayout.scss";

export default function RootLayout() {
  return (
    <>
      <div className="container_header">
        <Header />
      </div>
      <main className="main">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
