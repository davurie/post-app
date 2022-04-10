import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Post } from 'src/app/models/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  @Input() posts!: Post[];

  gridSize!: number;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.deviceWatcher();
  }

  likePost(post: Post): void {
    this.posts.find((res: Post) => res.id == post.id)!.liked = !post.liked;
  }

  switchIcon = (liked: boolean): string => liked ? 'favorite' : 'favorite_border';

  protected deviceWatcher() {
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
