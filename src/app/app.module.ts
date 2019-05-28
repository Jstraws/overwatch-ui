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
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule
} from '@angular/material';
import {HeroStatisticComponent} from './hero-statistic/hero-statistic.component';
import {StatisticComponent} from './statistic/statistic.component';
import {StatisticListComponent} from './statistic-list/statistic-list.component';
import {RegisterComponent} from './register/register.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {EditMatchComponent} from './edit-match/edit-match.component';
import {ChartsModule} from 'ng2-charts';
import {RankGraphComponent} from './rank-graph/rank-graph.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'heroesAvailable', component: HeroListComponent, canActivate: [AuthGuard]},
  {path: 'hero/:heroId', component: HeroDetailComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'history', component: UserMatchHistoryComponent, canActivate: [AuthGuard]},
  {path: 'match/:matchId', component: MatchDetailComponent, canActivate: [AuthGuard]},
  {path: 'newMatch', component: NewMatchComponent, canActivate: [AuthGuard]},
  {path: 'edit/:matchId', component: EditMatchComponent, canActivate: [AuthGuard]},
  {path: 'stat/:type/:value', component: StatisticComponent, canActivate: [AuthGuard]},
  {path: 'stat/:listType', component: StatisticListComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always'},
  {path: 'graph/rank', component: RankGraphComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: '**', redirectTo: 'home'}
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
    HeroStatisticComponent,
    StatisticComponent,
    StatisticListComponent,
    RegisterComponent,
    EditMatchComponent,
    RankGraphComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {onSameUrlNavigation: 'reload'}
    ),
    UiModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
