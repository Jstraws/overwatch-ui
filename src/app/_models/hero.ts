export class Hero {
  heroId: number;
  name: string;
  type: string;

  constructor(heroId: number, name: string, type: string) {
    this.heroId = heroId;
    this.name = name;
    this.type = type;
  }
}
