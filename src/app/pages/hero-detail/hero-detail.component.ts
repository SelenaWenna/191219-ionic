import {Component, OnInit, OnDestroy} from '@angular/core';
import {Hero} from '../../state/heroes/heroes.state.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {GetHero, UpdateHero} from '../../state/heroes/heroes.actions';
import {HeroesState} from '../../state/heroes/heroes.state';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
    heroForm: FormGroup;
    hero$: Observable<Hero>;
    subscriptions: Array<any> = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private store: Store,
        private formBuilder: FormBuilder,
    ) {
        this._createHeroForm();
        this.getHero();
        this._fillHeroForm();
    }

    public getHero() {
        const {id} = this.route.snapshot.params;
        return this.store.dispatch(new GetHero(id));
    }

    private _createHeroForm() {
        this.heroForm = this.formBuilder.group(
            {
                name: this.formBuilder.control('', Validators.required),
                description: this.formBuilder.control(''),
            });
    }

    private _fillHeroForm() {
        const {id} = this.route.snapshot.params;
        this.hero$ = this.store.select(HeroesState.hero(id));
        const subscription = this.hero$.subscribe((hero) => {
            if (hero) {
                this.heroForm.patchValue(hero);
            }
        });
        this.subscriptions.push(subscription);
    }

    save(): void {
        const hero: Hero = this.heroForm.value;
        const {id} = this.route.snapshot.params;
        const subscription = this.store.dispatch(new UpdateHero({...hero, id}))
            .subscribe(() => this.router.navigateByUrl('/heroes'));
        this.subscriptions.push(subscription);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }
}
