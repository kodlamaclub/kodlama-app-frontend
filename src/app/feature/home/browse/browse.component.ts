import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  browseItem = [
    {
      title: "A'dan Z'ye Figma",
      time: "12 saat",
      kind: "video anlatımlı",
      student: "423 öğrenci",
      image: "group"
    },
    {
      title: "React'a Giriş",
      time: "6 saat",
      kind: "canlı yayın",
      student: "648 öğrenci",
      image: "group1"
    },
    {
      title: "Python'a Giriş",
      time: "24 saat",
      kind: "video anlatımlı",
      student: "562 öğrenci",
      image: "group2"
    }
  ]
}
