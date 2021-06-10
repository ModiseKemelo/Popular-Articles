import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync, } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), HttpClientModule, AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
