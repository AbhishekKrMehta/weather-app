import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
  showLoader = true;

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
