import {Component, OnInit} from '@angular/core';
import {Map} from '../_models/map';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Hero} from '../_models/hero';
import {HeroService} from '../_services/hero.service';
import {MapService} from '../_services/map.service';
import {MatchService} from '../_services/match.service';
import {Match} from '../_models/match';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent implements OnInit {
  mapValues: Array<Map>;
  heroesAvailable: Hero[];
  matchForm: FormGroup;
  loading: boolean;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private heroService: HeroService,
    private mapService: MapService,
    private matchService: MatchService
  ) {
  }

  get f() {
    return this.matchForm.controls;
  }

  get heroesArray() {
    return <FormArray>this.matchForm.get('heroesArray');
  }

  ngOnInit() {
    this.heroService.getAll().subscribe(data => {
      this.heroesAvailable = data;

    });

    this.mapService.getStandardMaps().subscribe(maps => {
      this.mapValues = maps;
    });

    this.matchForm = this.formBuilder.group({
      heroesArray: this.addHeroControls()
    });
  }

  addHeroControls() {
    const arr = this.heroesAvailable.map(item => {
      return this.formBuilder.control(false);
    });

    return this.formBuilder.array(arr);
  }

  onSubmit() {
    this.submitted = true;

    if (this.matchForm.invalid) {
      return;
    }

    const tempMatch = new Match(this.matchForm.value);

    console.log(tempMatch);
    this.matchService.saveNewMatch(tempMatch);
  }

}
