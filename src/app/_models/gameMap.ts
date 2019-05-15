export class GameMap {
  mapId: number;
  name: string;
  type: string;
  iconUrl: string;

  constructor(mapId: number, name: string, type: string, iconUrl: string) {
    this.mapId = mapId;
    this.name = name;
    this.type = type;
    this.iconUrl = iconUrl;
  }
}
