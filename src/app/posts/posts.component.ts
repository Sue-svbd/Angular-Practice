import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces';
import { Service } from '../service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private httpService: Service) {}

  ngOnInit(): void {
    this.getPosts();
  }
  // onSelect(post: Post) {
  //   this.selectedPost = post;
  // }

  getPosts(): void {
    this.httpService.getPosts().subscribe((data) => (this.posts = data));
  }
}
