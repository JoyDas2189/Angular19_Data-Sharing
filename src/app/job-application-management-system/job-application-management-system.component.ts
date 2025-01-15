import { Component, OnInit } from '@angular/core';
import { JobApplicationManagementSystemListComponent } from "./job-application-management-system-list/job-application-management-system-list.component";
import { CommonModule } from '@angular/common';
import { ApplicantService } from '../services/applicant.service';
import { Applicant } from '../models/applicants.model';

@Component({
  selector: 'app-job-application-management-system',
  imports: [JobApplicationManagementSystemListComponent, CommonModule],
  templateUrl: './job-application-management-system.component.html',
  styleUrl: './job-application-management-system.component.scss'
})
export class JobApplicationManagementSystemComponent implements OnInit{
  applicants:Applicant[]  = [];

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    this.loadApplicants();
    console.log("loadApplicants",this.loadApplicants())
  }
  loadApplicants() {
    this.applicants = this.applicantService.getApplicants();

  }

  downloadResume(url: string, fileName: string) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link.href); // Clean up
      })
      .catch(error => console.error('Error downloading file:', error));
  }
  

}
