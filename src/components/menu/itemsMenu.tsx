import Link from "next/link";
import { Item } from "./item";


export const Menu = () => {
    const items = [
        {
            genero: 'Slasher',
            numero: 200
        },
        {
            genero: 'Supernatural',
            numero: 300
        },
        {
            genero: 'Zombie',
            numero: 150
        },
        {
            genero: 'Psychological',
            numero: 180
        },
        {
            genero: 'Found Footage',
            numero: 120
        },
        {
            genero: 'Vampire',
            numero: 170
        },
        {
            genero: 'Body Horror',
            numero: 90
        },
    ];

    return (
        <div className="w-full flex-col gap-4 font-neoplanta uppercase font-light text-2xl">
            <h1 className="font-genera text-defaultRed mt-3 mb-3 text-3xl">HORROR GENRE</h1>
            {items.map((item, index) => (
                <Item key={index} link="#">
                    <p>{item.genero}</p>
                    <span className="text-sm capitalize font-argentum font-light opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {item.numero} movies
                    </span>
                </Item>
            ))}
        </div>
    )
}