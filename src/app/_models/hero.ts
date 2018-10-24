export class Hero {
  heroId: number;
  name: string;
  type: string;
  heroUrl: string;

  constructor(heroId: number, name: string, type: string, heroUrl: string) {
    this.heroId = heroId;
    this.name = name;
    this.type = type;
    this.heroUrl = heroUrl;
  }
}
