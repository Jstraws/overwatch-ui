export class Statistic {
  name: string;
  wins: number;
  losses: number;
  draws: number;
  srChange: number;
  iconUrl: string;

  constructor(name: string, wins: number, losses: number, draws: number, srChange: number, iconUrl: string) {
    this.name = name;
    this.wins = wins;
    this.losses = losses;
    this.draws = draws;
    this.srChange = srChange;
    this.iconUrl = iconUrl;
  }
}
