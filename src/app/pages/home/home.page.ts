import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
import {
  debounceTime
} from "rxjs/operators";
import { LoadingController, PopoverController } from '@ionic/angular';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Toast } from '@capacitor/toast';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  articlesData: any; // for holding api response data
  articlesList: any[] = []; // to hold articles list after extracting from the api response
  filteredArticles: any[] = []; // article results from serac bar
  data = false; // for shimmer/ loadig animation, shimmer will show when it is false

  searchTerm: string = ''; // for searching article by title
  searchControl: FormControl;
  articlePeriod: number;  // period for articles to show

  constructor(private articlesService: ArticlesService, private router: Router, private loadingController: LoadingController,
    public popoverController: PopoverController, private storageService: StorageService) {
    this.searchControl = new FormControl();
    this.articlePeriod = 1; // set to 1 day by default
  }

  ngOnInit() {

  }



  // this method run when the page is about to be rendered, then it will make an api call to fetch article
  ionViewWillEnter() {
    setTimeout(() => {
      this.articlesService.getAllArticlesInAPeriod(this.articlePeriod).subscribe(res => {
        this.articlesData = res;
        this.articlesList = this.articlesData.results;
        this.articlesList.sort((a: any, b: any) => (+new Date(b.published_date) - +new Date(a.published_date))); // Sorting article, latest first
        this.filteredArticles = this.articlesList;
      }, error => { },
        () => { });
      this.data = true;
      this.setFilteredFacilities(this.searchTerm);

      this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe(search => {
        this.data = true;
        this.setFilteredFacilities(search);
      });
    }, 1000);
  }


  doRefresh(event) {
    this.data = false;
    setTimeout(() => {
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
    return this.filteredArticles.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }



  viewDeatil(article: any) {
    this.storageService.set('article', JSON.stringify(article));
    this.router.navigateByUrl('/article-detailed-view');
  }

  async getArticlesInASpecificPeriod(period: any) {
    Toast.show({
      text: 'Fetching articles from ' + period + ' day(s).',
    });
    this.data = false;
    this.articlesService.getAllArticlesInAPeriod(this.articlePeriod).subscribe(res => {
      this.articlesData = res;
      this.articlesList = this.articlesData.results.sort((a: any, b: any) => (+new Date(b.published_date) - +new Date(a.published_date)));
      setTimeout(() => {
        this.data = true;
      }, 2000);
    }, err => {
      Toast.show({
        text: 'Oops, failed to fetch articles, please pull down to refresh again',
      });
      this.data = true;
    })
  }


  async showPopoUp(event: any) {
    const popUp = await this.popoverController.create({
      component: PopUpComponent,
      cssClass: 'my-custom-class',
      event: event,
      translucent: true
    });
    await popUp.present();

    await popUp.onDidDismiss().then((results) => {
      this.articlePeriod = results.data;
      this.getArticlesInASpecificPeriod(this.articlePeriod);
    });

  }





}
