import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { CreateActivityPageComponent } from './pages/create-activity-page/create-activity-page.component';
import { RouterModule } from '@angular/router';
import { appRouting } from './app.routing';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    ActivityPageComponent,
    CreateActivityPageComponent,
    ActivityCardComponent
  ],
  imports: [
    RouterModule.forRoot(appRouting), //, { enableTracing: true }),
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
