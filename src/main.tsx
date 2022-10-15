import React from 'react'
import ReactDOM from 'react-dom/client'
import router from "./router";
import {RouterProvider} from "react-router-dom";
import {GlobalStyle} from "./components";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyle/>
        <RouterProvider router={router}/>
    </React.StrictMode>
)