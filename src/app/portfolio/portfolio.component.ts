import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  isCollapsed
  constructor() { }
  
  ngOnInit() {
  }
  
  ngOnDestroy(): void {
  }
}
