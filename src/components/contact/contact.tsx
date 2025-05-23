import Link from "next/link";
import React from "react";
import { Dribbble, Github } from "../icons/icons";

export default function Contact() {
  return (
    <section className="w-full flex justify-center items-center flex-col gap-6 mt-32 mb-32">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="font-genera text-defaultRed uppercase text-2xl">
          How it&apos;s done!
        </h1>
        <h2 className="uppercase font-neoplanta text-7xl">Follow closely</h2>
        <p className="font-argentum">
          Check out the code in Github Check out the code in Github
        </p>
      </div>
      <div className="flex flex-col uppercase items-center text-center font-[600] w-[600px] gap-4 mt-8">
        <Link
          href={""}
          className="flex items-center justify-center gap-4 w-full px-4 py-3 border border-gray-500/15 hover:bg-white/5"
        >
          <Dribbble size={20} />
          <p className="flex items-center justify-center whitespace-nowrap">
            Follow the design that this project was based
          </p>
        </Link>
        <Link
          href={""}
          className="flex items-center justify-center gap-4 w-full px-4 py-3 border border-gray-500/15 hover:bg-white/5"
        >
          <Github size={20} />
          <p className="flex items-center justify-center">
            Check out the code in Github
          </p>
        </Link>
      </div>
    </section>
  );
}
