import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.scss']
})
export class GistsComponent implements OnInit {
  gists: Array<any>
  constructor(private _http: HttpClient) { 
    this.gists = new Array()
  }

  ngOnInit() {
    this._http.get('https://api.github.com/users/JustinCast/gists')
      .subscribe(
        data => {
          for(let key in data){
            if(data.hasOwnProperty(key)){
              this.gists.push(data[key]);
            }
          }
        },
        error => {
          console.log(error)
        }
      )
  }
  redirect(index){
    window.open(String(this.gists[index].html_url), "_blank");
  }

}
