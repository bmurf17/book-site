import { Component } from "react";
import Authors from "../components/Authors/Authors";
import Friends from "../components/Friends/Friends";
import Home from "../components/Home Page/Home";
import MyBooks from "../components/My Books/MyBooks";
import Poems from "../components/Poems/Poems";
import TBR from "../components/TBR/TBR";

interface Route {
    link: string;
    element: JSX.Element;
    navName: string;
}

export const routes: Route[] = [
    {
        link: "/",
        element: <Home />,
        navName: "Home"
    },
    {
        link: "/mybooks",
        element: <MyBooks />,
        navName: "My Books"
    },
    {
        link: "/tbr",
        element: <TBR />,
        navName: "To Be Read"
    },
    {
        link: "/friends",
        element: <Friends />,
        navName: "Friends"
    },
    {
        link: "/poems",
        element: <Poems />,
        navName: "Poems"
    },
    {
        link: "/author",
        element: <Authors />,
        navName: "Authors"
    },
]