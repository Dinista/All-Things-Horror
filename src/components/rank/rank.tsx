'use client';
import { useState, useRef } from 'react';
import { mockMovies } from "@/mocks/data/mockMovies";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";
import { Movie } from "@/types/api/types";
import Image from 'next/image';
import React from 'react';

export const Rank = () => {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(mockMovies[0]);
    const movieRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [api, setApi] = React.useState<CarouselApi>()

    const handleSelectMovie = (movie: Movie, index: number) => {
        setSelectedMovie(movie);
        api?.scrollTo(index);
    };




    return (
        <div>

            <h1 className='text-xl font-argentum font-semibold  mb-6'>BEST MOVIES OF THIS MONTH</h1>

            <Carousel className="w-full overflow-x-auto" title="Rank" setApi={setApi}
                opts={{
                    align: "start",
                }}
            >
                <CarouselContent className="flex gap-4" >
                    {mockMovies.map((movie: Movie, index: number) => (
                        <CarouselItem
                            key={movie.id}
                            className="transition-transform duration-300 cursor-pointer"
                            onClick={() => handleSelectMovie(movie, index)}
                        >

                            <div className="flex items-end relative">
                                <Image
                                    className="border-8"
                                    src={movie.posterUrl}
                                    alt={`${movie.title} poster`}
                                    width={selectedMovie?.id === movie.id ? 400 : 150}
                                    height={550}
                                />
                                <div className="mt-4 lg:mt-0 lg:ml-8 flex flex-col justify-center absolute">
                                    {selectedMovie?.id === movie.id && (
                                        <div className="p-4 text-white rounded-md shadow-lg ml-96 w-full font-argentum flex flex-col gap-2">
                                            <p className='font-bold text-defaultRed'>{(index + 1)}ª SCARIEST MOVIE THIS MONTH</p>
                                            <h2 className="text-5xl font-bold mb-4 font-neoplanta">{selectedMovie.title.toUpperCase()}</h2>
                                            <p className="text-lg font-extrabold text-defaultRed">{selectedMovie.genre}</p>
                                            <p className="text-lg mt-2">{selectedMovie.synopsis}</p>
                                            <div className="flex justify-between text-gray-500">
                                                <p className="text-md mt-2">Directed by: {selectedMovie.director}</p>
                                                <p className="text-sm mt-2">Released: {selectedMovie.releaseYear}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};
