import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-planner-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './event-planner-list.component.html',
  styleUrl: './event-planner-list.component.scss'
})
export class EventPlannerListComponent {
  @Input() eventData: any = null;
  @Output() submitEvent = new EventEmitter<any>();
  eventForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      guests: this.fb.array([]),
    });
  }

  get guests(): FormArray {
    return this.eventForm.get('guests') as FormArray;
  }

  addGuest(): void {
    this.guests.push(this.fb.control('', Validators.required));
  }

  removeGuest(index: number): void {
    this.guests.removeAt(index);
  }
  
  ngOnChanges(): void {
    if (this.eventData) {
      this.eventForm.patchValue(this.eventData);
      this.eventForm.setControl(
        'guests',
        this.fb.array(this.eventData.guests.map((guest: string) => this.fb.control(guest)))
      );
    }
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      this.submitEvent.emit(this.eventForm.value);
      this.eventForm.reset();
      this.guests.clear();
    }
  }

  onCancel(): void {
    this.submitEvent.emit();
  }
}
