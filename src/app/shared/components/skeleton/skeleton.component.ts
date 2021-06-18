import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'kasabadan-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {
  @Input() count = 1;
  @Input() appearance: 'circle' | 'line' = 'line';
  @Input() height = '100%';
  @Input() width = '100%';
  @Input() gap = '0.5rem';

  constructor() {
  }

  ngOnInit(): void {
    this.count = Number(this.count);
  }

}
