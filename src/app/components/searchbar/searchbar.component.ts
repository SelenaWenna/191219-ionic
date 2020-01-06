import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {SetSearch} from '../../state/heroes/heroes.actions';
import {HeroesState} from '../../state/heroes/heroes.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Select(HeroesState.search)
  search: Observable<string>;

  constructor(
    private store: Store,
  ) {}

  ngOnInit() {}

  HeroesGetList(search) {
    this.store.dispatch(new SetSearch(search));
  }
}
