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
  comments: string;

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
    this.heroes = this.heroes.filter(obj => obj.name !== hero.name);
  }
}
