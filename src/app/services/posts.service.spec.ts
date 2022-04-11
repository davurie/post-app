import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { PostsService } from './posts.service';

describe('Service: Posts', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });

    service = TestBed.inject(PostsService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should return 100 posts', () => {
    service.getPosts().subscribe(data => {
      expect(data.length).toEqual(100);
    });
  });

});
