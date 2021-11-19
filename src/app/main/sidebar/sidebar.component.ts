import { Component, OnInit } from '@angular/core';
import { faTachometerAlt,faUsersCog, faUsers, faCertificate, faHome, faLifeRing, faUserFriends, faShieldAlt, faUserNinja} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  myadmin=faUserNinja;
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
    icon:faTachometerAlt,
    path: ['/']
  },
  {
    name: 'Fokontany',
    icon:faUsersCog,
    path: ['/fokontany']
  },
  {
    name: 'Mponina',
    icon:faUsers,
    path: ['/mponina']
  },
  {
    name: 'Certificats',
    icon:faCertificate,
    children: [
      {
        name: 'Residence',
        icon:faHome,
        path: ['/sub-menu-1']
      },

      {
        name: 'Vie',
        icon:faLifeRing,
        path: ['/sub-menu-2']
      },
      {
        name: 'Celibat',
        icon:faUserFriends,
        path: ['/sub-menu-2']
      },
      {
        name: 'Charge et de Garde',
        icon:faShieldAlt,
        path: ['/sub-menu-2']
      },
      {
        name: 'Bonne Conduite',
        path: ['/sub-menu-2']
    }
    ]
  }
];
