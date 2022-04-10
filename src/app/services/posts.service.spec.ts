import { TestBed, inject } from '@angular/core/testing';
import { Post } from '../models/posts';
import { PostsService } from './posts.service';

describe('Service: Posts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsService]
    });
  });

  it('should return 100 posts', inject([PostsService], async (service: PostsService) => {
    let posts: Post[] = await service.getPosts().then(res => res);

    expect(posts.length).toEqual(100);
  }));
});
