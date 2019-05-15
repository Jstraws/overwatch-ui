export class Statistic {
  name: string;
  wins: number;
  losses: number;
  draws: number;
  srChange: number;
  iconUrl: string;
  heroStats: Statistic[];

  constructor(name: string, wins: number, losses: number, draws: number, srChange: number, iconUrl: string, heroStats: Statistic[]) {
    this.name = name;
    this.wins = wins;
    this.losses = losses;
    this.draws = draws;
    this.srChange = srChange;
    this.iconUrl = iconUrl;
    this.heroStats = heroStats;
  }
}
