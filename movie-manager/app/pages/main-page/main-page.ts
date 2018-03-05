import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { MainViewModel } from './main-view-model';
import { GestureEventData } from 'ui/gestures';
import { MovieViewModel } from '../movie-page/movie-view-model';
import * as navigationModule from '../../shared/navigation';
import { ItemEventData } from 'ui/list-view';
import { SearchViewModel } from '../search-page/search-view-model';

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.actionBarHidden = true;
    page.bindingContext = new MainViewModel();
}

export function toggleFavorite(args: GestureEventData) {
    let movie = <MovieViewModel>args.view.bindingContext;
    movie.toggleFavorite();
}

export function selectMovie(args: ItemEventData) {
    let movie = <MovieViewModel>args.view.bindingContext;
    let mainViewModel = <MainViewModel>args.view.parent.bindingContext;
    mainViewModel.isLoading = true;
    movie.getDetails().then(() => {
        mainViewModel.isLoading = false;
        navigationModule.navigateToMovie(movie);
    });
}

export function searchTap(args: GestureEventData) {
    navigationModule.navigateToSearchPage();
}