import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { Post } from 'src/app/models/posts';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let post: Post;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatGridListModule, MatIconModule, MatToolbarModule],
      declarations: [PostsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;

    post = {
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      userId: 1,
      liked: false
    };

    component.posts = [post]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should like and unlike post', () => {
    console.log(post);
    component.likePost(post);
    expect(post.liked).toBeTruthy();

    component.likePost(post);
    expect(post.liked).toBeFalsy();
  });

  it('should switch unliked and liked icons', () => {
    expect(component.switchIcon(post.liked)).toEqual('favorite_border');
    component.likePost(post);
    expect(component.switchIcon(post.liked)).toEqual('favorite');
  });

});
