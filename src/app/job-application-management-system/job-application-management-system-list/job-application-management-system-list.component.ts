import { ApplicantService } from './../../services/applicant.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-application-management-system-list',
  imports: [ReactiveFormsModule],
  templateUrl: './job-application-management-system-list.component.html',
  styleUrl: './job-application-management-system-list.component.scss'
})
export class JobApplicationManagementSystemListComponent {
  jobForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private applicantService: ApplicantService
  ) {
    this.jobForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      position: ['', [Validators.required]],
      resume: [null, [Validators.required]]
    })
  }

  onSubmit() {
    debugger
    this.applicantService.addApplicants(this.jobForm.value);
    this.jobForm.reset()

    console.log("Applicant Service: ",this.applicantService)
    console.log("JobForm: ",this.jobForm.value)
  }


  

}
