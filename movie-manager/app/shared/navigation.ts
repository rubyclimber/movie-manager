import * as frameModule from 'ui/frame';
import { MovieViewModel } from '../pages/movie-page/movie-view-model';

export function startingPage() {
    return 'pages/login-page/login-page'
}

export function navigateToMovie(movie: MovieViewModel) {
    frameModule.topmost().navigate({
        moduleName: 'pages/movie-page/movie-page',
        context: movie
    });
}

export function navigateToMainPage(userId: string) {
    frameModule.topmost().navigate({
        moduleName: 'pages/main-page/main-page',
        backstackVisible: false
    })
}

export function backOnePage() {
    frameModule.topmost().goBack();
}