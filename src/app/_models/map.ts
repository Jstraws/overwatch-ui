export class Map {
  mapId: number;
  name: string;
  type: string;

  constructor(mapId: number, name: string, type: string) {
    this.mapId = mapId;
    this.name = name;
    this.type = type;
  }
}
