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
      title:"Nodejs Backend Geliştirici Bootcampı ",
      content:"Nestjs, verimli, güvenilir ve ölçeklenebilir sunucu tarafı uygulamaları oluşturmak için bir Node.js frameworku."
    }
  ]

  courses=[
    {
      image:"mobile-app",
      title:"Mobil Uygulama Geliştirme",
      kind:"Ionic"
    },
    {
      image:"google",
      title:"Google Chrome Eklenti Geliştirme",
      kind:"Angular"
    },
    {
      image:"firebase",
      title:"Firebase ile Web Geliştirme ",
      kind:"Firebase"
    },
    {
      image:"amazon-web-services",
      title:"Serverless Geliştirme",
      kind:"Amazon Web Services"
    }
  ]
}
