import { GestureEventData } from 'ui/gestures';
import * as navigationModule from '../../shared/navigation';
import { EventData } from 'ui/frame';
import { Page, NavigatedData } from 'ui/page';
import { MovieViewModel } from './movie-view-model';

export function backTap(args: GestureEventData) {
    navigationModule.backOnePage();
}

export function navigatingTo(args: NavigatedData) {
    let page = <Page>args.object;
    let movieViewModel = <MovieViewModel>args.context;
    movieViewModel.isLoading = true;
    page.bindingContext = movieViewModel;
    page.actionBarHidden = true;
    movieViewModel.getDetails().then(() => {
        movieViewModel.isLoading = false;        
    });
    console.log(movieViewModel.userId);
}
