import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage';

import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHandler, HttpClient, Storage, ArticlesService]
    });
    service = TestBed.inject(ArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
