import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sliders=[
    {
      images:"dashboard",
      title:"Nodejs Backend Geliştirici Bootcampi ",
      content:"Nestjs, verimli, güvenilir ve ölçeklenebilir sunucu tarafı uygulamaları oluşturmak için bir Node.js frameworku."
    }
  ]
}
