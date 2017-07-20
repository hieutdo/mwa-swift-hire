import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../../environments/environment';
import { TdLoadingService } from '@covalent/core';
import { AuthService } from '../../auth/auth.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.scss']
})
export class JobDetailsPageComponent implements OnInit {
  jobDetails: any;
  userProfile: any;
  error: any;

  constructor(private route: ActivatedRoute,
              private auth: AuthService,
              private authHttp: AuthHttp,
              private jobService: JobService,
              private loadingService: TdLoadingService) {
    this.userProfile = auth.userProfile;
  }

  ngOnInit() {
    this.loadingService.register('jobdetails.load');
    this.route.params
      .mergeMap(({ jobId }) => {
        return this.authHttp.get(`${environment.api.baseUrl}/jobs/${jobId}`);
      })
      .map(res => res.json())
      .subscribe(
        jobDetails => {
          this.jobDetails = jobDetails;
          this.loadingService.resolve('jobdetails.load');
        },
        error => {
          this.error = error;
          this.loadingService.resolve('jobdetails.load');
        });
  }

  isJobOwner(): boolean {
    return this.userProfile._id === this.jobDetails.createdBy._id;
  }

  isAssignee(): boolean {
    return this.jobDetails.assignee
      ? this.userProfile._id === this.jobDetails.assignee._id
      : false;
  }

  isInWaitingList(): boolean {
    return this.jobDetails.waitingList
      ? !!this.jobDetails.waitingList.find(candidate => candidate._id === this.userProfile._id)
      : false;
  }

  canApply(): boolean {
    return !this.isJobOwner() && !this.isInWaitingList() && !this.jobDetails.assignee;
  }

  applyJob(): void {
    this.jobService.addCandidate(this.jobDetails._id, this.auth.userProfile._id).subscribe(
      data => this.jobDetails = data
    );
  }
}
