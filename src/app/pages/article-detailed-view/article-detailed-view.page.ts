import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
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
    this.storageService.get('article').then(result => {
      if (result != null) {
        this.articleToView = result;
      }
    }).catch(e => {
      console.log('error: ' + e);
    });
  }

  ionViewDidLeave() {
    this.storageService.remove('article');
  }

  // opening in app browser to read an articl in detail
  readMore(url) {
    const browser = this.iab.create(url)
  }

}
