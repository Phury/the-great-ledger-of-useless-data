import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/model/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-activity-page',
  templateUrl: './create-activity-page.component.html',
  styleUrls: ['./create-activity-page.component.css']
})
export class CreateActivityPageComponent implements OnInit {
  recipes: ['food', 'suburi', 'weight'];
  activity: Activity;

  steps = ['recipes', 'amount', 'date']
  activeStep = 0;

  constructor(
    private router: Router,
    private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activity = { recipe: '' };
  }

  selectRecipe(recipe: string) {
    this.activity = { recipe };
    this.next();
  }

  selectAmount(amount: string) {
    this.activity.amount = amount;
    this.next();
  }

  selectDate(dateTerm: string) {
    this.activity.date = this.parse(dateTerm);
    this.complete();
  }

  complete() {
    this.activityService.save(this.activity);
    this.router.navigateByUrl('/activity');
  }

  next() {
    this.activeStep++;
  }

  stepTo(step: string) {
    this.activeStep = this.steps.indexOf(step);
  }

  private parse(dateTerm: string) {
    console.log(dateTerm);
    return new Date();
  }


}
