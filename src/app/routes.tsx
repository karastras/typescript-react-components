import { RouteObject } from "react-router-dom";
import ExemplePage from "../pages/exemplePAge/ExemplePage";
import FormStepContainer from "../pages/FormStep/FormStepContainer";
import Next from "../pages/next/Next";
import PointEntree from "../pages/pointEntree/PointEntree";
import TempBuilding from "../pages/TempBuilding/TempBuilding";

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
        path: "/page01",
        element: <ExemplePage />
    },
    {
        path: "/page02",
        element: <Next />
    },
    {
        path: "/formulaire/etape-une",
        element: <FormStepContainer />
    },
    {
        path: "/formulaire/etape-deux",
        element: <FormStepContainer />
    },
    {
        path: "/formulaire/etape-trois",
        element: <FormStepContainer />
    },
    {
        path: "/temp-page",
        element: <TempBuilding/>
    },
];