import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Guid } from "guid-typescript";
import { JournalEntry } from 'src/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Y A R A';
  subTitle = 'Yet Another Reflection App'
  isAuth: boolean;

  budget = '7000000000';

  heroes = [{
    name: 'Captain Marvel',
    rent: '2000000000'
  }, 
  {
    name: 'Spiderman',
    rent: 100000
  }, 
  {
    name: 'Black Panther',
    rent: '1000000000'
  }, 
  {
    name: 'Thor',
    rent: '2000000000'
  }];

  entries = [
    new JournalEntry(
      Guid.create(),
      'Morning Thoughts',
      'Today I am excited to go out to the coast to spend some time surfing. Its great to get away.',
      new Date(2020, 8, 1, 10, 5)
      ),
    new JournalEntry(
      Guid.create(),
      'Starting the Day With Positivity',
      'Yoga was a wonderful way to start the day. It brought peace and relaxation into my life.',
      new Date(2020, 7, 19, 20, 22)
      ),
    new JournalEntry(
      Guid.create(),
      'A Great Day Spent Fishing',
      'I woke up at 4:45am and headed down to the river. The sunrise was gorgeous, illuminating Mt. Hood first. I am especially grateful for the 25lb chinook salmon that I landed in the first thiry minutes of fishing.',
      new Date(2020, 4, 27, 9, 33)
      )
    ];


  constructor() { }

  ngOnInit(): void {
    this.isAuth = true;
  }
}
