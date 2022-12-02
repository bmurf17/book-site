import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { routes } from "../constants/Routes";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen">
        {/* Side Bar */}
        <Transition.Root show={open}>
          <Dialog
            as="div"
            onClose={() => {
              setOpen(false);
            }}
            className="fixed inset-0 z-40"
          >
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
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <XMarkIcon className="h-5 w-5"></XMarkIcon>
                </button>
                <div className="py-4 px-6 font-bold text-green-600">
                  Book Tracker
                </div>
                <div className="overflow-y-auto flex-1">
                  <div className="mb-10">
                    <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
                      Main
                    </h3>
                    {routes.map((route) => {
                      if (route.icon && route.navName) {
                        return (
                          <Link to={route.link} key={route.navName}>
                            <div
                              className="flex items-center px-6 py-2.5 text-gray-500 hover:text-green-600 group text-lg"
                              onClick={() => {
                                setOpen(false);
                              }}
                            >
                              {route.icon}
                              <div className="px-4">{route.navName}</div>
                            </div>
                          </Link>
                        );
                      }
                    })}
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
        </Transition.Root>

        <div className="flex-1">
          {/* Top Bar */}
          <div className="w-full h-20 flex justify-between items-center px-8 text-black bg-gray-50">
            <h1
              className="text-2xl font-bold text-green-700 hover:cursor-pointer"
              onClick={() => {
                setOpen(true);
              }}
            >
              <div className="flex items-center text-lg">
                <FontAwesomeIcon icon={faChartLine} />
                <div className="px-2 "> Book Tracker</div>
              </div>
            </h1>
            <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-orange-200 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                BM
              </span>
            </div>
          </div>
          {/* Main */}
          <main className="px-8 py-4">
            <Routes>
              {routes.map((route) => {
                return (
                  <Route
                    path={route.link}
                    element={route.element}
                    key={route.link}
                  />
                );
              })}
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default Nav;
