import Link from "next/link";


export const Menu = () => (
    <div className="w-full">

        <Link href={''}>
            Drama
        </Link>
        <Link href={''}>
            Slasher
        </Link>
        <Link href={''} className="border-b hover:border-t-2 hover:border-b-2 flex justify-between">
            <p>Kill</p>
            <span>200 movies</span>
        </Link>
        <Link href={''}>
            Kill
        </Link>
    </div>
)