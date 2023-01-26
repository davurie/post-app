import { Injectable } from '@angular/core';

import { BehaviorSubject, EMPTY, map, Observable, of, shareReplay } from 'rxjs';

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

  constructor(private postsService: PostsService) {
    this.getPosts();
  }

  getPosts() {
    this.getCache();

    !this.posts && this.postsService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      this.setCache(this.posts);
    });

  }

  likePost(post: Post): void {
    this.posts.find((res: Post) => res.id == post.id)!.liked = !post.liked;
    this.setCache(this.posts);
  }

  private setCache(posts: Post[]): void {
    sessionStorage.setItem('posts', JSON.stringify(posts));
  }

  private getCache(): void {
    this.posts = JSON.parse(sessionStorage.getItem('posts')!);
  }
}
