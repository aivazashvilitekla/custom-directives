import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-second',
  templateUrl: './task-second.component.html',
  styleUrls: ['./task-second.component.scss'],
})
export class TaskSecondComponent implements OnInit {
  counter(i: number) {
    return new Array(i);
  }

  constructor() {}

  ngOnInit(): void {}
}
