import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/model/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})
export class ActivityPageComponent implements OnInit {
  activities$: Observable<Activity[]>;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activities$ = this.activityService.load();
  }

}
