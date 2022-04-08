import { Component } from '@angular/core';
import { Post } from './models/posts';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[];

  constructor(postsService: PostsService) {
    this.posts = [];
    postsService.getPosts().then(res => this.posts = res);
  }

  likePost(post: Post): void {
    this.posts.find((res: Post) => res.id == post.id)!.liked = !post.liked;
  }
}
