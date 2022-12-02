import {
  faBook,
  faBookOpenReader,
  faHome,
  faPenFancy,
  faUserGroup,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Authors from "../components/Authors/Authors";
import Friends from "../components/Friends/Friends";
import Home from "../components/Home Page/Home";
import { BookView } from "../components/My Books/BookView";
import MyBooks from "../components/My Books/MyBooks";
import Poems from "../components/Poems/Poems";
import TBR from "../components/TBR/TBR";

interface Route {
  link: string;
  element: JSX.Element;
  icon?: JSX.Element;
  navName?: string;
}

export const routes: Route[] = [
  {
    link: "/",
    element: <Home />,
    icon: <FontAwesomeIcon icon={faHome} />,
    navName: "Home",
  },
  {
    link: "/mybooks",
    element: <MyBooks />,
    icon: <FontAwesomeIcon icon={faBook} />,
    navName: "My Books",
  },
  {
    link: "/tbr",
    element: <TBR />,
    icon: <FontAwesomeIcon icon={faBookOpenReader} />,
    navName: "To Be Read",
  },
  {
    link: "/friends",
    element: <Friends />,
    icon: <FontAwesomeIcon icon={faUserGroup} />,
    navName: "Friends",
  },
  {
    link: "/poems",
    element: <Poems />,
    icon: <FontAwesomeIcon icon={faPenFancy} />,
    navName: "Poems",
  },
  {
    link: "/author",
    element: <Authors />,
    icon: <FontAwesomeIcon icon={faUserPen} />,
    navName: "Authors",
  },
  {
    link: "/mybooks/:id",
    element: <BookView />,
  },
];
