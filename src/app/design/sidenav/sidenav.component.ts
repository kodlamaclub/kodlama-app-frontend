import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menuItems = [
    {
      icon: 'dashboard',
      title: 'Anasayfa',
      path: 'home'
    },
    {
      icon: 'book',
      title: 'Kurslarım',
      path: 'courses'
    },
    {
      icon: 'heart',
      title: 'Favorilerim',
      path: 'favorites'
    }, {
      icon: 'notepad',
      title: 'Ödevlerim',
      path: 'tasks'
    },
    {
      icon: 'award',
      title: 'Başarılarım',
      path: 'achievements'
    },
    {
      icon: 'certificate',
      title: 'Sertifikalarım',
      path: 'certificates'
    },
    {
      icon: 'settings',
      title: 'Ayarlar',
      path: 'settings'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {

  }
}
