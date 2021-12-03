import { Component, OnInit } from '@angular/core';
import { faTachometerAlt,faUsersCog, faUsers, faCertificate, faHome, faLifeRing, faUserFriends, faShieldAlt, faUserNinja} from '@fortawesome/free-solid-svg-icons'
import { AuthService } from 'src/app/authentification/auth.service';

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
  public user = this.authService.loggedUser;
  public menu = MENU;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

}
export const MENU = [
  {
    name: 'Dashboard',
    icon:faTachometerAlt,
    path: ['/oui']
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
