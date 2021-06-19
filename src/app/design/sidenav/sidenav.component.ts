import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  currentItem: any;

  constructor() {
  }

  ngOnInit(): void {

  }

  homePage = {name: `<i class="material-icons">home</i>Anasayfa`}
  courses = {name: `<i class="material-icons">class</i> Kurslarım`}
  favorites = {name: `<i class="material-icons">favorite_border</i> Favorilerim`}
  homework = {name: `<i class="material-icons">auto_stories</i> Ödevlerim`}
  achievements = {name: `<i class="material-icons">military_tech</i> Başarılarım`}
  certificates = {name: `<i class="material-icons">card_membership</i> Sertifikalarım`}
  settings = {name: `<i class="material-icons">settings</i> Ayarlar`}

  items = [this.homePage, this.courses, this.favorites, this.homework, this.achievements, this.certificates, this.settings]

  setCurrentItem(item: any) {
    this.currentItem = item;
  }

  getCurrentItemClass(item: any) {
    if (item == this.currentItem) {
      return "mb-6 click"
    } else {
      return "mb-6"
    }
  }

  getItemClass() {
    if (!this.currentItem) {
      return "mb-6 click"
    } else {
      return "mb-6"
    }
  }
}
