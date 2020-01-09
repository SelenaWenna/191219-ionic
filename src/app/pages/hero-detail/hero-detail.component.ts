import {Component, OnInit} from '@angular/core';
import {Hero} from '../../state/heroes/heroes.state.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {GetHero, UpdateHero} from '../../state/heroes/heroes.actions';
import {HeroesState} from '../../state/heroes/heroes.state';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;
    heroForm: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private store: Store,
        private formBuilder: FormBuilder,
    ) {
        const id = +this.route.snapshot.paramMap.get('id');

        this.heroForm = this.formBuilder.group({
            name: this.formBuilder.control('', Validators.required),
            description: this.formBuilder.control(''),
        });

        this.getHero(id).subscribe(() => {
            this.store.select(HeroesState.hero(id))
                .subscribe(res => {
                    this.hero = res;
                    this.heroForm = this.formBuilder.group({
                        name: this.formBuilder.control(this.hero.name, Validators.required),
                        description: this.formBuilder.control(this.hero.description),
                    });
                    this.heroForm.valueChanges.subscribe(value => {
                        this.hero = {
                            id: this.hero.id,
                            img: this.hero.img,
                            name: value.name,
                            description: value.description,
                        };
                    });
                });
        });
    }

    public getHero(id: number) {
        return this.store.dispatch(new GetHero(id));
    }

    save(): void {
        this.hero.name = this.hero.name && this.hero.name.trim();
        if (!this.hero.name) {
            return;
        }
        this.store.dispatch(new UpdateHero(this.hero))
            .subscribe(() => this.router.navigateByUrl('/heroes'));
    }

    ngOnInit() {
    }

}
