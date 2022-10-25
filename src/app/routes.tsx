import { RouteObject } from "react-router-dom";
import ExemplePage from "../pages/exemplePAge/ExemplePage";
import Next from "../pages/next/Next";
import PointEntree from "../pages/pointEntree/PointEntree";

export interface RouteType {
    path?: string
    element?: JSX.Element
  }

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <PointEntree />
    },
    {
        path: "/exemplePage",
        element: <ExemplePage />
    },
    {
        path: "/exemplePage/next",
        element: <Next />
    }
];