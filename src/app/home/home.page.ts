import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import {
  debounceTime
} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  articlesData: any;
  articlesList: any[] = [];
  filteredArticles: any[] = [];
  data = false;

  searchTerm: string = '';
  searchControl: FormControl;

  constructor(private articlesService: ArticlesService, private router: Router) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {

  }

  ionViewWillEnter() {




    setTimeout(() => {
      this.articlesService.getAllFacilities(1).subscribe(res => {
        this.articlesData = res;
        this.articlesList = this.articlesData.results;
        console.log(this.articlesList);
        this.filteredArticles = this.articlesList;
      }, error => { },
        () => { });
      this.data = true;
      this.setFilteredFacilities(this.searchTerm);

      this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe(search => {
        this.data = true;
        this.setFilteredFacilities(search);

      });
    }, 2000);




  }


  doRefresh(event) {
    this.data = false;
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.data = true;
    }, 2000);
  }



  onSearchInput() {
    this.data = false;
  }

  setFilteredFacilities(search) {
    this.articlesList = this.searchForFacility(search);
  }

  searchForFacility(searchTerm) {
    console.log('Search Item ' + searchTerm, this.filteredArticles.filter(item => { item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 }));
    return this.filteredArticles.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }


  openFilter() {
    console.log('Open Filter');
    /* Toast.show({
      text: 'Open Filter',
    }); */
  }


  viewDeatil(article: any) {
    console.log('Detailed View ', article);
    //this.router.navigateByUrl('/article-detailed-view')
  }

}
