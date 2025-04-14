import Link from "next/link";
import { Item } from "./item";


export const Menu = () => (
    <div className="w-full flex-col gap-4 font-neoplanta uppercase font-light text-2xl">
        <h1 className="font-genera text-defaultRed mt-3 mb-3 text-3xl">HORROR GENRE</h1>
        <Item link="#">
            <p>Kill</p>
            <span className="text-base font-argentum font-light opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                200 movies
            </span>
        </Item>
        <Item link="#">
            <p>Kill</p>
            <span className="text-base font-argentum font-light opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                200 movies
            </span>
        </Item>
        <Item link="#">
            <p>Kill</p>
            <span className="text-base font-argentum font-light opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                200 movies
            </span>
        </Item>


    </div>
)