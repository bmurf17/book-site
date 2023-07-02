import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { routes } from "../../Constants/Routes";

interface Props {
  close: () => void;
}

export function SideBarNav({ close }: Props) {
  const { user } = useContext(UserContext);

  return (
    <Dialog as="div" onClose={close} className="fixed inset-0 z-40">
      <Transition.Child
        as={Fragment}
        enter="ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="flex flex-col w-64 relative z-10 h-full bg-gray-50 border-r border-gray-200">
          <button
            type="button"
            className="absolute top-2 right-2 flex items-center justify-center w-10 h-10"
            onClick={close}
          >
            <XMarkIcon className="h-5 w-5"></XMarkIcon>
          </button>
          <div className="py-4 px-6 font-bold text-green-600">Book Tracker</div>
          <div className="overflow-y-auto flex-1">
            <div className="mb-10">
              <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
                Main
              </h3>
              <>
                {user.id === 0 ? (
                  <>
                    <Link to={"/"}>
                      <div
                        className="flex items-center px-6 py-2.5 text-gray-500 hover:text-green-600 group text-lg"
                        onClick={close}
                      >
                        <FontAwesomeIcon icon={faHome} />
                        <div className="px-4">Home</div>
                      </div>
                    </Link>
                    <Link to={"login"}>
                      <button
                        onClick={close}
                        className="flex items-center px-6 py-2.5 text-gray-500 hover:text-green-600 group text-lg"
                      >
                        Login to access website
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    {routes.map((route) => {
                      if (route.icon && route.navName) {
                        return (
                          <Link to={route.link} key={route.navName}>
                            <div
                              className="flex items-center px-6 py-2.5 text-gray-500 hover:text-green-600 group text-lg"
                              onClick={close}
                            >
                              {route.icon}
                              <div className="px-4">{route.navName}</div>
                            </div>
                          </Link>
                        );
                      }
                    })}
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-50"></Dialog.Overlay>
      </Transition.Child>
    </Dialog>
  );
}
