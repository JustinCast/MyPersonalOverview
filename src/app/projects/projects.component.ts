import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material'
import { DialogService } from '../dialog/dialog.service';
// import { FancyPreloaderTypes } from 'ngx-fancy-preloader';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  repos = []
  reposToRender = []
  link: string
  loading: boolean
  languageFilterState: boolean = false
  primaryFilterState: boolean = true
  allLanguages: Array<any> = []
  filterSwitch = "Hide filters"
  mostForkedCount: number // esto es para comparacion (saber cual es el repo con más forks)
  mostForkedRepo: any // esto es para localizar el repo que tenga mas forks
  mostPopularCount: number // para comparar el repo más seguido
  mostPopularRepo: any // para obtener el repo más seguido
  prevValue: number = 0 // esto es para el paginator
  nextValue: number = 5 // esto es para el paginator
  conditions = [
    "By Language",
    "Most Popular",
    "Most Forked",
  ]
  public result: any
  p: any
  // type: string = FancyPreloaderTypes.EVIL_NORMAL
  constructor(private _http: HttpClient, private dialog: MatDialog,
    public dialogService: DialogService,) { }

  ngOnInit() {
    this._http.get('https://api.github.com/users/JustinCast/repos')
    .subscribe(
      data => {
        this.loading = true
        for(let key in data){
          if(data.hasOwnProperty(key)){
            this.reposToRender.push(data[key])
          }
        }
      },
      err =>{
        console.log(err)
      }
    )
    this.loading = false
    this.repos = this.reposToRender
    // console.log('REPOS')
    // console.log(this.repos)

  }

  ngAfterViewInit() {
    /**
     * lo siguiente es necesario para quitar el padding por defecto que trae la libreria para paginació
     */ 
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.zero-padding { padding: 0; }';
    document.getElementsByTagName('head')[0].appendChild(style);
    let ul = document.getElementsByClassName("ngx-pagination")
    ul[0].classList.add('zero-padding')
  }

  chargeAllLanguages(){
    for (var index = 0; index < this.repos.length; index++) {
      if((!this.allLanguages.includes(this.repos[index].language)) && (this.repos[index].language !== null))
        this.allLanguages.unshift(this.repos[index].language)
    }
  }

  redirect(index){
    window.open(String(this.repos[index].html_url), "_blank");
  }

  filterRepos(c){
    switch (c) {
      case "By Language":
        this.chargeAllLanguages()
        this.languageFilterState = true
        break
      case "Most Popular":
        this.getMostPopularRepo()
        break
      case "Most Forked":
        this.getMostForkedRepo()
        break

      default:
        break;
    }
  }
  displayReposByLanguage(l) {
    this.reposToRender = []
    for (var index = 0; index < this.repos.length; index++) {
      if(this.repos[index].language === l)
        this.reposToRender.unshift(this.repos[index])
    }
  }

  switchFilters() {
    switch (this.filterSwitch) {
      case "Hide filters":
        this.reposToRender = this.repos
        this.languageFilterState = false
        this.primaryFilterState = false
        this.filterSwitch = "Show Filters"
        break

      case "Show Filters":
        this.primaryFilterState = true
        this.filterSwitch = "Hide filters"
        break

      default:
        break;
    }
  }
  getMostForkedRepo() {
    this.mostForkedCount = 0
    this.reposToRender = this.repos
    this.reposToRender.forEach(r => {
      if(this.mostForkedCount < r.forks){
        this.mostForkedCount = r.forks
        this.mostForkedRepo = r
      }
    })
    this.reposToRender = []
    this.reposToRender.unshift(this.mostForkedRepo)
  }
  getMostPopularRepo() {
    this.mostPopularCount = 0
    this.reposToRender = this.repos
    this.reposToRender.forEach(r => {
      if(this.mostPopularCount < r.watchers){
        this.mostPopularCount = r.watchers
        this.mostPopularRepo = r
      }
    })
    this.reposToRender = []
    if(this.mostPopularCount === 0){
      this.reposToRender = this.repos
      this.openDialog()
      return
    }
    this.reposToRender.unshift(this.mostPopularRepo)
  }

  openDialog(): void {
    this.dialogService
    .confirm('There is not enough data', 'Let me add a little experience, and I will notice you')
    .subscribe(res => this.result = res);
  }
}
