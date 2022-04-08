import { Component, Input } from '@angular/core';

import { Post } from 'src/app/models/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  @Input() posts!: Post[];

  likePost(post: Post): void {
    this.posts.find((res: Post) => res.id == post.id)!.liked = !post.liked;
  }

  switchIcon = (liked: boolean): string => liked ? 'favorite' : 'favorite_border';
}
