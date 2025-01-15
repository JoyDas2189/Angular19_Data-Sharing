import { Injectable } from '@angular/core';
import { Applicant } from '../models/applicants.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  applicants: Applicant[] = [];

  getApplicants() {
    return this.applicants
  }

  addApplicants(applicant: Applicant) {
    this.applicants.push(applicant)
  }
}
