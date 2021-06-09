import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import {
  debounceTime
} from "rxjs/operators";
import { LoadingController, PopoverController } from '@ionic/angular';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Toast } from '@capacitor/toast';
import { StorageService } from '../services/storage.service';

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
  articlePeriod: number

  constructor(private articlesService: ArticlesService, private router: Router, private loadingController: LoadingController,
    public popoverController: PopoverController, private storageService: StorageService) {
    this.searchControl = new FormControl();
    this.articlePeriod = 1; // set to 1 day by default
  }

  ngOnInit() {

  }



  ionViewWillEnter() {
    setTimeout(() => {
      this.articlesService.getAllArticlesInAPeriod(this.articlePeriod).subscribe(res => {
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
    }, 200);




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
    console.log('Search Item ' + searchTerm, this.filteredArticles.filter(item => { item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 }));
    return this.filteredArticles.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }



  viewDeatil(article: any) {
    console.log('Detailed View ', article);
    this.storageService.set('article', JSON.stringify(article));
    this.router.navigateByUrl('/article-detailed-view');
  }

  async getArticlesInASpecificPeriod(period: any) {
    const loadingDialog = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Fetching articles for the last ' + period + ' days',
      backdropDismiss: false

    });
    await loadingDialog.present();
    this.articlesService.getAllArticlesInAPeriod(this.articlePeriod).subscribe(res => {
      this.articlesData = res;
      this.articlesList = this.articlesData.results;
      this.data = false;
      console.log('Begin async operation');
      setTimeout(() => {
        console.log('Async operation has ended');
        this.data = true;
      }, 2000);
      loadingDialog.dismiss();
    }, err => {
      Toast.show({
        text: 'Oops, failed to fetch articles, please pull down to refresh again',
      });
      loadingDialog.dismiss();
    })
  }


  async presentPopover(event: any) {
    const popUp = await this.popoverController.create({
      component: PopUpComponent,
      cssClass: 'my-custom-class',
      event: event,
      translucent: true
    });
    await popUp.present();

    await popUp.onDidDismiss().then((results) => {
      console.log('onDidDismiss resolved with role', results.data);
      this.articlePeriod = results.data;
      this.getArticlesInASpecificPeriod(this.articlePeriod);
    });

  }





}
