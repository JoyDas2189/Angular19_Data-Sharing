import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges  } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss',
})
export class ChildComponentComponent {
  @Input() selectedExpense: any = null;
  @Output() addExpense = new EventEmitter<any>();
  expenses: Array<any> = [];
  categories = [
    { id: '1', name: 'Personnel Costs' },
    { id: '2', name: 'Material Costs' },
    { id: '3', name: 'Operational Costs' },
    { id: '4', name: 'Administrative Costs' },
    { id: '5', name: 'Marketing and Sales Costs' },
    { id: '6', name: 'Travel and Transportation Costs' },
    { id: '7', name: 'IT and Software Costs' },
    { id: '8', name: 'Training and Development Costs' },
    { id: '9', name: 'Capital Expenditures' },
    { id: '10', name: 'Depreciation and Amortization' },
  ];
  expenseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      date: [''],
      amount: [''],
      category: [''],
      description: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedExpense'] && this.selectedExpense) {
      this.expenseForm.patchValue(this.selectedExpense);
    }
  }


  onSubmit() {
    if (this.expenseForm.valid) {
      this.addExpense.emit(this.expenseForm.value);
      this.expenseForm.reset();
    }
  }
}
