import React from "react";

function Friends() {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white w-full">
      <div className="grid grid-cols-1 divide-y px-6 py-4">
        <div className="flex ">Add Friends</div>
        <div>Someone Read a book</div>
        <div>Someone added a new friend</div>
        <div>Some new joined the website</div>
      </div>
    </div>
  );
}

export default Friends;
