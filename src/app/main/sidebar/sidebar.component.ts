import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  myUser = {
    name: 'Admin',
    picture: ''
  }
  public user = this.myUser;
  public menu = MENU;
  constructor() { }

  ngOnInit(): void {
  }

}
export const MENU = [
  {
    name: 'Dashboard',
    path: ['/']
  },
  {
    name: 'Fokontany',
    path: ['/fokontany']
  },
  {
    name: 'Mponina',
    path: ['/mponina']
  },
  {
    name: 'Blank',
    path: ['/blank']
  },
  {
    name: 'Certificats',
    children: [
      {
        name: 'Residence',
        path: ['/sub-menu-1']
      },

      {
        name: 'Vie',
        path: ['/sub-menu-2']
      },
      {
        name: 'Celibat',
        path: ['/sub-menu-2']
      },
      {
        name: 'Charge et de Garde',
        path: ['/sub-menu-2']
      },
      {
        name: 'Bonne Conduite',
        path: ['/sub-menu-2']
    }
    ]
  }
];
