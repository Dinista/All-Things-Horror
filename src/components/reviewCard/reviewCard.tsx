"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function ReviewCard({
    href = '',
    imageUrl = "/api/placeholder/300/450",
    title = "Movie Title",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={href}
            className="relative bg-gray-300 h-72 w-48 shadow-lg overflow-hidden group border-4 border-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="z-10 absolute inset-0 transition-opacity duration-700 ease-in-out bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />

            <div className="relative w-full h-full">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 192px"
                    className="object-cover"
                    priority
                />
            </div>
            <div />
            <div
                className={`z-20 absolute bottom-0 left-0 right-0 p-3 text-white transition-transform duration-700 ${isHovered ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                <h3 className="text-lg font-bold mb-1">
                    {title}
                </h3>
                <p className="text-sm text-white line-clamp-3 overflow-hidden text-ellipsis opacity-100">
                    {description}
                </p>
            </div>
        </Link>
    );
}