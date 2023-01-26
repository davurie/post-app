import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Post } from '../models/posts';

@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(private http: HttpClient) { }

  /**
   * Returns a list of {@link Posts}
   */
  getPosts = (): Observable<Post[]> => this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

}