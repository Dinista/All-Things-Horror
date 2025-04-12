import { Movie, ApiResponse } from '@/types/api/types';
import { mockMovies } from '@/mocks/data/mockMovies';

export const fetchMovies = async (): Promise<ApiResponse<Movie[]>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, data: mockMovies });
        }, 500);
    });
};


export const fetchMovieById = async (id: number): Promise<ApiResponse<Movie>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const movie = mockMovies.find((m) => m.id === id);
            if (movie) {
                resolve({ success: true, data: movie });
            } else {
                resolve({ success: false, error: "Movie not found" });
            }
        }, 500);
    });
};


export const addMovie = async (newMovie: Movie): Promise<ApiResponse<Movie>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            mockMovies.push(newMovie);
            resolve({ success: true, data: newMovie });
        }, 500);
    });
};


export const updateMovie = async (updatedMovie: Movie): Promise<ApiResponse<Movie>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const movieIndex = mockMovies.findIndex((m) => m.id === updatedMovie.id);
            if (movieIndex !== -1) {
                mockMovies[movieIndex] = updatedMovie;
                resolve({ success: true, data: updatedMovie });
            } else {
                resolve({ success: false, error: "Movie not found" });
            }
        }, 500);
    });
};


export const deleteMovie = async (id: number): Promise<ApiResponse<null>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const movieIndex = mockMovies.findIndex((m) => m.id === id);
            if (movieIndex !== -1) {
                mockMovies.splice(movieIndex, 1);
                resolve({ success: true });
            } else {
                resolve({ success: false, error: "Movie not found" });
            }
        }, 500);
    });
};
