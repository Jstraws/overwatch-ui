export class Season {
  seasonId: number;
  name: string;
  startDate: Date;
  endDate: Date;

  constructor(seasonId: number, name: string, startDate: Date, endDate: Date) {
    this.seasonId = seasonId;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
