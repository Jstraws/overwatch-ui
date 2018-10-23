import {Map} from './map';
import {Hero} from './hero';
import {User} from './user';

export class Match {
  matchId: number;
  result: string;
  map: Map;
  heroes: Array<Hero>;
  matchDate: DateTimeFormat;
  rankDifference: number;
  isPlacement: boolean;
  appUser: User;

  public constructor(init?: Partial<Match>) {
    Object.assign(this, init);
  }
}
