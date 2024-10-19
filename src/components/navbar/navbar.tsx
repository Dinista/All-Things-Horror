import { NavigationMenuList } from '@radix-ui/react-navigation-menu';
import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '../ui/navigation-menu';
import Link from 'next/link';



export const NavBar = () => {
    return (
        <NavigationMenu orientation='horizontal' className='flex-none justify-between w-full max-w-none py-4'>
            <article className='flex flex-col leading-3'>
                <p className='text-red-700'>All things</p>
                <h2 className='text-2xl font-bold'>Horror</h2>
            </article>
            <NavigationMenuList className='flex gap-8' defaultValue={'HOME'}>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            HOME
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/playlist" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            MOVIE LIST
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            ABOUT US
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList >
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            PURO SANGRE
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    );
};
