import {createBrowserRouter} from "react-router-dom";
import Home from "./page/home";
import Exercise from "./page/exercise";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/exercise",
        element: <Exercise/>,
    },
]);

export default router