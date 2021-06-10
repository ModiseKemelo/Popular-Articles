import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StorageService } from 'src/app/services/storage.service';

import { ArticleDetailedViewPage } from './article-detailed-view.page';

describe('ArticleDetailedViewPage', () => {
  let component: ArticleDetailedViewPage;
  let fixture: ComponentFixture<ArticleDetailedViewPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDetailedViewPage ],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), HttpClientModule, AppRoutingModule, ],
      providers: [InAppBrowser, SocialSharing]

    }).compileComponents();

    fixture = TestBed.createComponent(ArticleDetailedViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
