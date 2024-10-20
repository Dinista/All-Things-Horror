export interface Movie {
    id: number;
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    posterUrl: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}
