import { Injectable } from '@angular/core';

import { Post } from '../models/posts';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor() { }

  /**
   * Returns a list of {@link Posts}
   */
  getPosts = async (): Promise<Post[]> =>
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => {
        return res as Post[]
      });
}