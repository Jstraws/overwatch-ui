import {GameMap} from './gameMap';
import {Hero} from './hero';
import {AppUser} from './appUser';

export class Match {
  matchId: number;
  result: string;
  gameMap: GameMap;
  heroes: Array<Hero>;
  matchDate: Date;
  rankDifference: number;
  rank: number;
  appUser: AppUser;

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
