import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../shared/Card";
import { AuthorChart } from "./_AuthorsChart";
import { GenreChart } from "./_GenreChart";
import { PageCount } from "./_PageCount";

function Home() {
  return (
    <>
      <div className="grid grid-cols-4 auto-rows-max gap-4">
        <div className="col-span-4 text-center">
          <div className="text-2xl font">Welcome User Name</div>
        </div>
        {/* Page Count */}
        <div className="md:col-span-4 col-span-4 ">
          <PageCount />
        </div>
        <div className="md:col-span-2 col-span-4">
          <GenreChart />
        </div>
        <div className="md:col-span-2 col-span-4">
          <AuthorChart />
        </div>
        <div className="md:col-span-1 col-span-4">
          <Link to={"mybooks"}>
            <Card content="Add Books Prompt" />
          </Link>
        </div>
        <div className="md:col-span-1 col-span-4">
          <Link to={"tbr"}>
            <Card content="Add TBR Prompt" />
          </Link>
        </div>
        <div className="md:col-span-1 col-span-4">
          <Link to={"friends"}>
            <Card content="Add Friends Prompt" />
          </Link>
        </div>
        <div className="md:col-span-1 col-span-4">
          <Link to={"poems"}>
            <Card content="check out Poems" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
