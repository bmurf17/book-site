import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

interface Props {
  open: () => void;
}

export function TopBarNav({ open }: Props) {
  const { user } = useContext(UserContext);

  return (
    <div className="w-full h-20 flex justify-between items-center px-8 text-black bg-gray-50">
      <h1
        className="text-2xl font-bold text-green-700 hover:cursor-pointer"
        onClick={open}
      >
        <div className="flex items-center text-lg">
          <FontAwesomeIcon icon={faChartLine} />
          <div className="px-2 "> Book Tracker</div>
        </div>
      </h1>
      <div className="text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-green-600 bg-opacity-100 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              {user.name ? <>{user.name}</> : <>User</>}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {user.name ? (
                <>
                  <div className="px-1 py-1 ">
                    <Link to={"myaccount"}>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-green-600 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            My Account
                          </button>
                        )}
                      </Menu.Item>
                    </Link>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-green-600 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Settings
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to={"login"}>
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Logout
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </>
              ) : (
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"login"}>
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Login
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
