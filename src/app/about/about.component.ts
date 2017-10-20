import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  languages: Array<String>
  constructor() { }

  ngOnInit() {
    this.languages = new Array()
    this.languages.unshift('Angular', 'Nodejs', 'Webpack', 'MongoDB', 'TypeScript')
  }

}
