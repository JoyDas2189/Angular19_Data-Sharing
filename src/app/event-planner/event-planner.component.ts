import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ReactiveFormsModule,
} from '@angular/forms';
import { EventPlannerListComponent } from './event-planner-list/event-planner-list.component';

@Component({
  selector: 'app-event-planner',
  imports: [CommonModule, ReactiveFormsModule, EventPlannerListComponent],
  templateUrl: './event-planner.component.html',
  styleUrl: './event-planner.component.scss',
})
export class EventPlannerComponent  {
  events: any[] = [];
  currentEvent: any = null;
  isEditing: boolean = false;

  handleEventSubmit(eventData: any): void {
    if (this.isEditing) {
      const index = this.events.findIndex((e) => e === this.currentEvent);
      if (index !== -1) {
        this.events[index] = eventData;
      }
    } else {
      this.events.push(eventData);
    }
    this.resetForm();
  }

    editEvent(event: any): void {
      this.currentEvent = event;
      this.isEditing = true;
    }
  
    deleteEvent(index: number): void {
      this.events.splice(index, 1);
    }
  
    resetForm(): void {
      this.currentEvent = null;
      this.isEditing = false;
    }
}
