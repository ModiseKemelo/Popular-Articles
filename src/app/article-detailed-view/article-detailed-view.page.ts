import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-article-detailed-view',
  templateUrl: './article-detailed-view.page.html',
  styleUrls: ['./article-detailed-view.page.scss'],
})
export class ArticleDetailedViewPage implements OnInit {
  articleToView: any;

  constructor(private storageService: StorageService, private iab: InAppBrowser) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.storageService.get('article').then(result => {
      if (result != null) {
        this.articleToView = result;
        console.log(result);
      }
    }).catch(e => {
      console.log('error: ' + e);
    });
  }

  ionViewDidLeave() {
    console.log('DID LEAVE');
    this.storageService.remove('article');
  }

  readMore(url) {
    const browser = this.iab.create(url)
  }

  shareArticle() {
    
  }

}
