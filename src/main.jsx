import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // 1 - configurando router
import Home from './templates/Home/index';
import WeekCalendar from './templates/WeekCalendar/index';
import ADM from './templates/ADMbase/index';
import Loading from './templates/Loading';
import Individual from './templates/Agendamento/Individual';
import Guiado from './templates/Agendamento/Guiado';
import Institucional from './templates/Agendamento/Institucional';
import OrientacoesVisitantes from './templates/OrientacoesVisitantes/Orientacoes.jsx';
import InfosAdicionais from './templates/InfosAdicionais/infos.jsx';

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
        path: "Agendamento/Individual",
        element: <Individual />
    },
    {
        path: "Agendamento/Guiado",
        element: <Guiado />
    },
    {
        path: "Agendamento/Institucional",
        element: <Institucional />
    },
    {
        path: "agendamento/orientacoes",
        element: <OrientacoesVisitantes />
    },
    {
        path:"/informacoes",
        element: <InfosAdicionais />
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);