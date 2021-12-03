import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {faBars,faSearch,faPowerOff} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/authentification/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
  faBars=faBars;
  faSearch=faSearch;
  fapoweroff=faPowerOff;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
  }
  deconnection=()=>{
    this.authService.logout()
  }

}
