import { Component } from '@angular/core';
import { ExpenseTrackerComponent } from "./expense-tracker/expense-tracker.component";
import { EventPlannerComponent } from "./event-planner/event-planner.component";
import { JobApplicationManagementSystemComponent } from "./job-application-management-system/job-application-management-system.component";

@Component({
  selector: 'app-root',
  imports: [ExpenseTrackerComponent, EventPlannerComponent, JobApplicationManagementSystemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-sharing';
}
