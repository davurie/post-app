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

  switchTheme(): void {
    const body = document.querySelector('body');

    if (body && body.classList.contains('light-theme')) {
      body.classList.remove('light-theme')
    } else {
      body?.classList.add('light-theme')
    }
  }

  seeTheCode(): void {
    window.open('https://github.com/DavidKf/post-app', '_blank');
  }

}
