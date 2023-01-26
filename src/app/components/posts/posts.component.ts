import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Post } from 'src/app/models/posts';
import { PostState } from 'src/app/states/post.state';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  gridSize!: number;

  constructor(public postState: PostState, private breakpointObserver: BreakpointObserver) {
    this.deviceWatcher();
  }

  trackPosts = (i: number, post: Post) => post.id;

  likePost = (post: Post): void => this.postState.likePost(post);

  switchIcon = (liked: boolean): string => liked ? 'favorite' : 'favorite_border';

  protected deviceWatcher(): void {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
    ]).subscribe((result: BreakpointState) => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.gridSize = 3;
      } else if (result.breakpoints[Breakpoints.Small] || result.breakpoints[Breakpoints.Medium]) {
        this.gridSize = 5;
      } else {
        this.gridSize = 10;
      }
    });
  }
}
