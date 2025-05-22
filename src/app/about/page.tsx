import { PageTemplate } from "@/templates/PageTemplate";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4">
        <section className="flex gap-8 p-4">
          <div className="w-1/3">
            <Image
              src={"/horror_characters.png"}
              alt="Horror Characters"
              width={400}
              height={400}
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-8 w-1/2">
            <h1 className="text-4xl font-neoplanta uppercase">
              All eyez on YOU
            </h1>
            <p className="text-gray-400 font-argentum">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              pariatur eum eius quod ducimus rerum explicabo eveniet minima
              quisquam, similique debitis? Veniam eos voluptate sequi doloremque
              numquam est tenetur consequatur!
            </p>
            <p className="font-genera font-extrabold text-defaultRed">
              Thank You! You&apos;re the responsable for this project
            </p>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
