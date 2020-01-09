import {Component, OnInit} from '@angular/core';
import {Hero} from '../../state/heroes/heroes.state.model';
import {Select, Store} from '@ngxs/store';
import {HeroesState} from '../../state/heroes/heroes.state';
import {GetHeroesList, DeleteHero} from '../../state/heroes/heroes.actions';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    @Select(HeroesState.heroes)
    heroes$: Observable<Hero[]>;

    constructor(
        private store: Store,
        private router: Router
    ) {
        this.store.dispatch(new GetHeroesList());
    }

    goToHeroDetails(id) {
        this.router.navigateByUrl(`/heroes/${id}`);
    }

    delete(hero: Hero): void {
        this.store.dispatch(new DeleteHero(hero.id));
    }

    ngOnInit() {
    }
}
