import { Injectable } from '@angular/core';
import { Activity } from '../model/activity';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activities: Activity[] = [
    {
      recipe: 'suburi',
      amount: '100',
      date: new Date(Date.parse('04/30/2020')),
    },
    {
      recipe: 'suburi',
      amount: '100',
      date: new Date(Date.parse('04/29/2020')),
    },
    {
      recipe: 'food',
      description: 'ramen',
      date: new Date(Date.parse('04/30/2020')),
    },
    {
      recipe: 'expense',
      description: 'groceries',
      amount: '100EUR',
      date: new Date(Date.parse('04/30/2020')),
    }
  ];

  constructor() { }

  load(): Observable<Activity[]> {
    return of(this.activities);
  }

  save(activity: Activity) {
    this.activities.push(activity);
  }
}
