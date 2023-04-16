import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Iplayer } from './shared/models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  searchVal! : string;
  title = 'custompipe';
  playerArray:Iplayer[] = [
    {
      name: 'Virat Kohli',
      country: 'India',
      role: 'Batsman',
      age: 33,
      matchesPlayed: 254,
      totalRuns: 12169,
      totalWickets: 4,
    },
    {
      name: 'Kane Williamson',
      country: 'New Zealand',
      role: 'Batsman',
      age: 31,
      matchesPlayed: 154,
      totalRuns: 7182,
      totalWickets: 29,
    },
    {
      name: 'Joe Root',
      country: 'England',
      role: 'Batsman',
      age: 31,
      matchesPlayed: 111,
      totalRuns: 9030,
      totalWickets: 36,
    },
    {
      name: 'Babar Azam',
      country: 'Pakistan',
      role: 'Batsman',
      age: 26,
      matchesPlayed: 81,
      totalRuns: 3808,
      totalWickets: 0,
    },
    {
      name: 'Steve Smith',
      country: 'Australia',
      role: 'Batsman',
      age: 32,
      matchesPlayed: 77,
      totalRuns: 7540,
      totalWickets: 17,
    },
    {
      name: 'Kagiso Rabada',
      country: 'South Africa',
      role: 'Bowler',
      age: 26,
      matchesPlayed: 47,
      totalRuns: 571,
      totalWickets: 213,
    },
    {
      name: 'Trent Boult',
      country: 'New Zealand',
      role: 'Bowler',
      age: 32,
      matchesPlayed: 79,
      totalRuns: 875,
      totalWickets: 317,
    },
    {
      name: 'Jasprit Bumrah',
      country: 'India',
      role: 'Bowler',
      age: 27,
      matchesPlayed: 19,
      totalRuns: 57,
      totalWickets: 83,
    },
    {
      name: 'Pat Cummins',
      country: 'Australia',
      role: 'Bowler',
      age: 28,
      matchesPlayed: 35,
      totalRuns: 493,
      totalWickets: 164,
    },
    {
      name: 'Rashid Khan',
      country: 'Afghanistan',
      role: 'Bowler',
      age: 23,
      matchesPlayed: 63,
      totalRuns: 658,
      totalWickets: 140,
    },
    {
      name: 'Ben Stokes',
      country: 'England',
      role: 'All-rounder',
      age: 29,
      matchesPlayed: 71,
      totalRuns: 4549,
      totalWickets: 161,
    },
    {
      name: 'Hardik Pandya',
      country: 'India',
      role: 'All-rounder',
      age: 27,
      matchesPlayed: 60,
      totalRuns: 1174,
      totalWickets: 54,
    },
    {
      name: 'Jason Holder',
      country: 'West Indies',
      role: 'All-rounder',
      age: 29,
      matchesPlayed: 49,
      totalRuns: 1987,
      totalWickets: 123,
    },
    {
      name: 'Mohammad Nabi',
      country: 'Afghanistan',
      role: 'All-rounder',
      age: 36,
      matchesPlayed: 128,
      totalRuns: 2683,
      totalWickets: 177,
    },
    {
      name: 'Quinton de Kock',
      country: 'South Africa',
      role: 'Wicketkeeper',
      age: 28,
      matchesPlayed: 53,
      totalRuns: 2958,
      totalWickets: 5,
    },
    {
      name: 'Jos Buttler',
      country: 'England',
      role: 'Wicketkeeper',
      age: 30,
      matchesPlayed: 91,
      totalRuns: 3022,
      totalWickets: 45,
    },
  ];

  


}

