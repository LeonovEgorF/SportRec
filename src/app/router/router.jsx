import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  Error,
  Tape,
  RootLayout,
  Ratings,
  ProfileOrg,
  MarketPlace,
  Live,
  Сompetitions,
} from "../../Pages";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      {
        path: "tape",
        element: <Tape />,
      },
      {
        path: "ratings",
        element: <Ratings />,
      },
      {
        path: "profile",
        element: <ProfileOrg />,
      },
      {
        path: "market",
        element: <MarketPlace />,
      },
      {
        path: "live",
        element: <Live />,
      },
      {
        path: "competitions",
        element: <Сompetitions />,
      },
    ],
    errorElement: <Error />,
  },
]);
