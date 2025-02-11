import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChildComponentComponent } from './expense-tracker-list/child-component.component';

@Component({
  selector: 'app-expense-tracker',
  imports: [CommonModule, ReactiveFormsModule, ChildComponentComponent],
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.scss',
})
export class ExpenseTrackerComponent {
  expenses: Array<any> = [];
  editingIndex: number | null = null;
  editingExpense: any = null;

  handleAddExpense(expense: any): void {
    if (this.editingIndex !== null) {
      this.expenses[this.editingIndex] = expense;
      this.editingIndex = null;
    } else {
      this.expenses.push(expense);
    }
  }


  deleteExpense(index: number): void {
    this.expenses.splice(index, 1);
  }
}
