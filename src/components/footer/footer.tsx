import { Logo } from "../logo/logo"
import { FooterCard } from "./footerContent"

export const Footer = () => {
    return (
        <footer className='flex py-8 justify-between'>
            <FooterCard header={<Logo />} description="Olá galera bacana e legal aqui estão vocês aqui e não estão sabendo como ficar bem" />
            <FooterCard header={'COMMUNITY'} description="Olá galera bacana e legal aqui estão vocês aqui e não estão sabendo como ficar bem" />
            <FooterCard header={'ALL LINKS'} description="Olá galera bacana e legal aqui estão vocês aqui e não estão sabendo como ficar bem" />
            <FooterCard header={'FOLLOW US'} description="Olá galera bacana e legal aqui estão vocês Aquele que sempre está bem" />
        </footer>
    )
}