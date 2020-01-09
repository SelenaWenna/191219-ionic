import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from '../../state/heroes/heroes.state.model';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {
                id: 11,
                name: 'Dr Nice',
                img: 'https://yt3.ggpht.com/a/AGF-l7-Ntux94NR78TCu1vno__OnKE0iYlwpA28akg=s900-c-k-c0xffffffff-no-rj-mo'
            },
            {
                id: 12,
                name: 'Narco',
                img: 'https://yt3.ggpht.com/a/AGF-l7-lwXzskwrUrO4h0rt2go4IDfi2v5dxVQO3dQ=s900-c-k-c0xffffffff-no-rj-mo'
            },
            {
                id: 13,
                name: 'Bombasto',
                img: 'https://yt3.ggpht.com/a/AGF-l7_ojzc72cJjLDTv6EHQ9_0NDjYnNyXURXiZ8w=s900-c-k-c0xffffffff-no-rj-mo'
            },
            {
                id: 14,
                name: 'Celeritas',
                img: 'https://imageog.flaticon.com/icons/png/512/163/163821.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'
            },
            {id: 15, name: 'Magneta', img: 'http://hanbek.ru/images/people/pinup.png'},
            {
                id: 16,
                name: 'RubberMan',
                img: 'https://im0-tub-ru.yandex.net/i?id=9e76bb17a864b32d7dd7638874c0d0c9&n=33&w=150&h=150'
            },
            {
                id: 17,
                name: 'Dynama',
                img: 'https://img1.freepng.ru/20180502/woe/kisspng-avatar-computer-icons-boy-avatar-5ae9ac16c36c53.5058970915252633828005.jpg'
            },
            {
                id: 18,
                name: 'Dr IQ',
                img: 'https://im0-tub-ru.yandex.net/i?id=adc3bee02ada561396877c9ecfe629f3&n=33&w=150&h=150'
            },
            {
                id: 19,
                name: 'Magma',
                img: 'https://im0-tub-ru.yandex.net/i?id=6b13d6ca04f27db10897d704b409e62f&n=33&w=150&h=150'
            },
            {
                id: 20,
                name: 'Tornado',
                img: 'https://im0-tub-ru.yandex.net/i?id=44c2e0c0656c0dbc50e1c4f8940d4214&n=33&w=286&h=150'
            }
        ];
        return {heroes};
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
}
