'use client';

import { NavigationMenuList } from '@radix-ui/react-navigation-menu';
import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '../ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../logo/logo';

export const NavBar = () => {
    const pathname = usePathname();

    return (
        <NavigationMenu orientation='horizontal' className='flex-none justify-between w-full max-w-none py-4'>
            <Logo />
            <NavigationMenuList className='flex gap-10 font-argentum'>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink 
                            className={`${navigationMenuTriggerStyle()} ${
                                pathname === '/' 
                                    ? 'text-defaultRed' 
                                    : ''
                            }`}
                        >
                            HOME
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/list" legacyBehavior passHref>
                        <NavigationMenuLink 
                            className={`${navigationMenuTriggerStyle()} ${
                                pathname === '/list' 
                                    ? 'text-defaultRed' 
                                    : ''
                            }`}
                        >
                            MOVIE LIST
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink 
                            className={`${navigationMenuTriggerStyle()} ${
                                pathname === '/about' 
                                    ? 'text-defaultRed' 
                                    : ''
                            }`}
                        >
                            ABOUT US
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem className='font-bloody text-2xl'>
                    <Link href="/purasangre" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${
                                pathname === '/purasangre' 
                                    ? 'text-defaultRed' 
                                    : ''
                            }`}>
                            PURA SANGRE
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};