import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {}

  ngAfterViewInit(): void {
    this.media.broadcast();
    this.changeDetectorRef.detectChanges();
  }
}
