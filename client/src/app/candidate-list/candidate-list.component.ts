import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TdDialogService, TdLoadingService, TdMediaService } from '@covalent/core';
import { MdSnackBar } from '@angular/material';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit, OnChanges, AfterViewInit {
  @Input()
  users: any[];

  filteredUsers: any[];

  constructor(private loadingService: TdLoadingService,
              private dialogService: TdDialogService,
              private snackBarService: MdSnackBar,
              private changeDetectorRef: ChangeDetectorRef,
              private jobService: JobService,
              public media: TdMediaService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.users) {
      this.filteredUsers = Object.assign([], changes.users.currentValue);
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this.changeDetectorRef.detectChanges();
  }

  filterUsers(displayName: string = ''): void {
    this.filteredUsers = this.users.filter((user: any) => {
      return user.name.toLowerCase().indexOf(displayName.toLowerCase()) > -1;
    });
  }

  delete(id: string): void {
    this.dialogService
      .openConfirm({ message: 'Are you sure you want to reject this candidate?' })
      .afterClosed().toPromise().then((confirm: boolean) => {
      if (confirm) {
        this._delete(id);
      }
    });
  }

  private async _delete(id: string): Promise<void> {
    try {
      this.loadingService.register('users.list');
      await this.jobService.removeCandidate(id).toPromise();
      this.users = this.users.filter((user: any) => {
        return user.id !== id;
      });
      this.filteredUsers = this.filteredUsers.filter((user: any) => {
        return user.id !== id;
      });
      this.snackBarService.open('User Deleted', 'Ok');
    } catch (error) {
      this.dialogService.openAlert({ message: 'There was an error trying to delete the user' });
    } finally {
      this.loadingService.resolve('users.list');
    }
  }

}
