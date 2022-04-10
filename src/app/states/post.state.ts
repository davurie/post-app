import { Injectable } from '@angular/core';

import { BehaviorSubject, map, shareReplay } from 'rxjs';

import { Post } from '../models/posts';
import { PostsService } from '../services/posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostState {

  private readonly _posts = new BehaviorSubject<Post[]>([]);

  readonly posts$ = this._posts.asObservable().pipe(shareReplay(1));

  get posts(): Post[] {
    return this._posts.getValue();
  }

  set posts(val: Post[]) {
    this._posts.next(val);
  }

  constructor(postsService: PostsService) {
    postsService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  likePost(post: Post): void {
    this.posts.find((res: Post) => res.id == post.id)!.liked = !post.liked;
  }
}
