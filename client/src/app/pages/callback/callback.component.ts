import { Component, OnDestroy, OnInit } from '@angular/core';
import { TdLoadingService } from '@covalent/core';

@Component({
  selector: 'app-callback',
  template: ''
})
export class CallbackComponent implements OnInit, OnDestroy {

  constructor(private loadingService: TdLoadingService) {}

  ngOnInit(): void {
    this.loadingService.register();
  }

  ngOnDestroy(): void {
    this.loadingService.resolve();
  }

}
