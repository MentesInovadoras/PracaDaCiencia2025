//projeto original
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './templates/Home/index'
import WeekCalendar from './templates/WeekCalendar/index'
import ADM from './templates/ADMbase/index'
import Loading from './templates/Loading'

//teste vivian
import React from 'react'
import ReactDOM from 'react-dom/client'

// 1 - configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//levará objetos que serão as páginas
const router = createBrowserRouter([
    {
        path: "/",
        element: <Loading />
    },
    {
        path: "/Home",
        element: <Home />
    },
    {
        path: "WeekCalendar",
        element: <WeekCalendar />
    },
    {
        path: "ADMbase",
        element: <ADM />
    },
    {
        path: "ADMdiario",
        element: <ADM />
    },
    {
        path: "ADMmensal",
        element: <ADM />
    },
    {
        path: "ADMsemanal",
        element: <ADM />
    },
    {
        path: "ADMsemanal",
        element: <ADM />
    },

])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);