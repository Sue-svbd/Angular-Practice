import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../interfaces';
import { Service } from '../service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post: any;
  constructor(
    private httpService: Service,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {}

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.httpService.getPost(id).subscribe((data) => (this.post = data));
  }
}
