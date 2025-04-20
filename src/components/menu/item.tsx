import Link from "next/link";
import { ReactNode } from "react";

type ItemProps = {
    children: ReactNode;
    link: string;
};

export function Item({ children, link }: ItemProps) {
    return (
        <Link
            href={link}
            className="transition duration-300 ease-in-out group border-b-2 border-t-2 border-t-white/0 hover:border-t-2 hover:border-b-2 flex items-center justify-between p-6 border-gray-600/20 hover:border-white/70"
        >
            {children}
        </Link>
    );
}
