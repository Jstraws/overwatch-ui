import {Map} from './map';
import {Hero} from './hero';
import {User} from './user';

export class Match {
  matchId: number;
  result: string;
  map: Map;
  heroes: Array<Hero>;
  matchDate: Date;
  rankDifference: number;
  rank: number;
  appUser: User;

  public constructor(init?: Partial<Match>) {
    Object.assign(this, init);
  }

  addHero(hero: Hero) {
    if (!this.heroes) {
      this.heroes = [];
    }
    this.heroes.push(hero);
  }

  deleteHero(hero: Hero) {
    const index = this.heroes.indexOf(hero, 0);
    this.heroes.splice(index, 1);
  }
}
