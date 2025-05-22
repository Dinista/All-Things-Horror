import { ReactNode } from "react";

type Props = {
  header: ReactNode | string;
  description: string | ReactNode;
};

export const FooterCard = ({ header, description }: Props) => {
  return (
    <section className="flex flex-col w-1/5 font-argentum text-sm">
      <h2
        className={
          typeof header === "string"
            ? "font-genera font-bold text-xl text-defaultRed mb-5"
            : "mb-2"
        }
      >
        {header}
      </h2>
      <p className="text-gray-400">{description}</p>
    </section>
  );
};
