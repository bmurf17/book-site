import { Transition } from "@headlessui/react";
import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../App";
import { routes } from "../../Constants/Routes";
import { SideBarNav } from "./_SidebarNav";
import { TopBarNav } from "./_TopBarNav";

function Nav() {
  const [open, setOpen] = useState(false);

  const { user } = useContext(UserContext);

  const close = () => {
    setOpen(false);
  };

  const openNav = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="flex min-h-screen">
        {/* Side Bar */}
        <Transition.Root show={open}>
          <SideBarNav close={close} />
        </Transition.Root>

        <div className="flex-1">
          {/* Top Bar */}
          <TopBarNav open={openNav} />

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
