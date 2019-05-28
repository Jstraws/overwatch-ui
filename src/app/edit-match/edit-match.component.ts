import {Component, OnInit} from '@angular/core';
import {Hero} from '../_models/hero';
import {HeroService} from '../_services/hero.service';
import {MapService} from '../_services/map.service';
import {MatchService} from '../_services/match.service';
import {GameMap} from '../_models/gameMap';
import {Match} from '../_models/match';
import {ActivatedRoute, Router} from '@angular/router';
import {AppUser} from '../_models/appUser';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  mapValues: GameMap[];
  heroesAvailable: Hero[];
  submitted = false;
  model: Match;
  startingSr: number;

  constructor(
    private heroService: HeroService,
    private mapService: MapService,
    private matchService: MatchService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.heroService.getAll().subscribe(data => {
      this.heroesAvailable = data;
    });

    this.mapService.getStandardMaps().subscribe(maps => {
      this.mapValues = maps;
    });

    const id = this.route.snapshot.paramMap.get('matchId');
    this.matchService.getSingleMatch(id).subscribe(data => {
      this.model = new Match(data);
      this.startingSr = this.model.rank - this.model.rankDifference;
      const currentUser: AppUser = JSON.parse(localStorage.getItem('currentUser'));
      if (this.model.appUser.userId !== currentUser.userId) {
        this.router.navigate(['/home']);
      }
    });
  }

  updateHeroes(hero: Hero, event) {
    if (event.target.checked) {
      this.model.addHero(hero);
    } else {
      this.model.deleteHero(hero);
    }
  }

  checkValue(event) {
    const value = event.target.value;

    if (value > 5000) {
      event.target.value = 5000;
    } else if (value < 1) {
      event.target.value = 1;
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.model.gameMap = this.mapValues.find(map => map.mapId === this.model.gameMap.mapId);
    this.model.rankDifference = this.model.rank - this.startingSr;
    this.matchService.updateMatch(this.model);
  }

  findHero(hero: Hero) {
    return this.model.heroes.filter(obj => JSON.stringify(obj) === JSON.stringify(hero)).length > 0;
  }
}
