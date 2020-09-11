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
  isAuth: boolean;

  entries = [
    new JournalEntry(
      Guid.parse('d0810cef-1389-4f9e-aeb4-41a11561f1d1'),
      'Morning Thoughts',
      'Today I am excited to go out to the coast to spend some time surfing. Its great to get away.',
      new Date(2020, 8, 1, 10, 5)
      ),
    new JournalEntry(
      Guid.parse('a3098d24-a6ff-43ee-bb5f-8dda002bb84e'),
      'Starting the Day With Positivity',
      'Yoga was a wonderful way to start the day. It brought peace and relaxation into my life.',
      new Date(2020, 7, 19, 20, 22)
      ),
    new JournalEntry(
      Guid.parse('3cc64db2-ebbd-41f9-8f31-eabecd3e9fc7'),
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
