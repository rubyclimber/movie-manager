export interface Movie {
    _id: string;
    title: string;
    description: string;
    userId: string;
    director: string;
}

export interface FavoriteMovie {
    movieId: string
}

export interface SavedCredentials {
    username: string;
    password: string;
}