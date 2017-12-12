import { Component, OnInit, OnDestroy } from '@angular/core';
import { HireMeDialogService } from '../hire-me/hire-me-dialog.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  result: any;
  isCollapsed
  constructor(public hireMeDialogService: HireMeDialogService) { }
  
  ngOnInit() {
  }
  
  ngOnDestroy(): void {
  }

  openDialog(): void {
    this.hireMeDialogService.openDialog('Contact me using Gmail', 'Sending email')
    .subscribe(res => this.result = res)
  }
}
