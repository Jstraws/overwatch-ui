import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {UiModule} from './ui/ui.module';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HomeComponent} from './home/home.component';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroService} from './_services/hero.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_guards/auth.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserMatchHistoryComponent} from './user-match-history/user-match-history.component';
import {NewMatchComponent} from './new-match/new-match.component';
import {MatchDetailComponent} from './match-detail/match-detail.component';
import {MatGridListModule, MatListModule} from '@angular/material';
import {HeroStatisticComponent} from './hero-statistic/hero-statistic.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'heroesAvailable', component: HeroListComponent, canActivate: [AuthGuard]},
  {path: 'hero/:heroId', component: HeroDetailComponent, canActivate: [AuthGuard]},
  {path: 'history', component: UserMatchHistoryComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'match/:matchId', component: MatchDetailComponent, canActivate: [AuthGuard]},
  {path: 'newMatch', component: NewMatchComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HomeComponent,
    HeroListComponent,
    LoginComponent,
    UserMatchHistoryComponent,
    NewMatchComponent,
    MatchDetailComponent,
    HeroStatisticComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
