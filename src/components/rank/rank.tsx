'use client';
import { useState, useRef } from 'react';
import { mockMovies } from "@/mocks/data/mockMovies";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Movie } from "@/types/api/types";
import Image from 'next/image';

export const Rank = () => {

    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);


    const movieRefs = useRef<(HTMLDivElement | null)[]>([]);


    const handleSelectMovie = (movie: Movie, index: number) => {
        setSelectedMovie(movie);
        // Scroll the selected movie into view
        movieRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
        });
    };

    return (


        <Carousel className="w-full  overflow-x-auto" title='Rank'>
            <CarouselContent className="flex gap-4">
                {mockMovies.map((movie: Movie, index: number) => (
                    <CarouselItem
                        key={movie.id}
                        ref={(el) => movieRefs.current[index] = el}
                        className={`cursor-pointer transition-transform duration-300'
                            }`}
                        onClick={() => handleSelectMovie(movie, index)}
                    >
                        <div className='flex items-end relative'>
                            <Image
                                className="border-8"
                                src={movie.posterUrl}
                                alt={`${movie.title} poster`}
                                width={selectedMovie?.id === movie.id ? 400 : 150}
                                height={550}
                            />
                            <div className="mt-4 lg:mt-0 lg:ml-8 flex flex-col justify-center absolute ">
                                {selectedMovie?.id === movie.id ? (
                                    <div className="p-4  text-white rounded-md shadow-lg ml-96 w-full">
                                        <h2 className="text-2xl font-bold mb-4">{selectedMovie.title}</h2>
                                        <p className="text-lg">{selectedMovie.genre}</p>
                                        <p className="text-md mt-2">Directed by: {selectedMovie.director}</p>
                                        <p className="text-sm mt-2">Released: {selectedMovie.releaseYear}</p>
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>


    )
};