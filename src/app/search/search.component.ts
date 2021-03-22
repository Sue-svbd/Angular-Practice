import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { User, Post } from '../interfaces';
import { Service } from '../service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class BrewerySearchComponent implements OnInit {
  constructor(private breweryService: Service) {}

  ngOnInit() {}
}
