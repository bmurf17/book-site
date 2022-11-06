import React, { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const Counter = () => {
    return (
        <div className="w-full h-20 flex justify-between items-center px-8 text-black">
            <h1 className="text-2xl font-bold text-[#4236CE]">REACT</h1>
            <ul className="flex items-center">
                <li className="px-4 text-lg font-semibold" >Text</li>
                <li className="px-4 text-lg font-semibold text-[#E24E1B]">Error</li>
                <li className="px-4 text-lg font-semibold text-[#0D6E0A]">Interact</li>
            </ul>

        </div>
    )
}
export default Counter;