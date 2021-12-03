import { Component, HostBinding, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Fokontany } from 'src/assets/models/fokontany';
import { User } from 'src/assets/models/user';
import { FokontanyService } from '../services/fokontany.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  displayedColumns: string[] = ['libellé'];

  dataSource!:MatTableDataSource<Fokontany>;

  allFokontany:Fokontany[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  @HostBinding('class') class = 'wrapper';
    public sidebarMenuOpened = true;

  constructor(private renderer: Renderer2, private apiFokontany: FokontanyService) { }

  ngOnInit(): void {
    this.renderer.removeClass(
      document.querySelector('app-root'),
      'login-page'
    );
    this.renderer.removeClass(
      document.querySelector('app-root'),
      'register-page'
    );
    this.getAllFokontany();
  }

  toggleMenuSidebar() {
    if (this.sidebarMenuOpened) {
      this.renderer.removeClass(
        document.querySelector('app-root'),
        'sidebar-open'
      );
      this.renderer.addClass(
        document.querySelector('app-root'),
        'sidebar-collapse'
      );
      this.sidebarMenuOpened = false;
    } else {
      this.renderer.removeClass(
        document.querySelector('app-root'),
        'sidebar-collapse'
      );
      this.renderer.addClass(
        document.querySelector('app-root'),
        'sidebar-open'
      );
      this.sidebarMenuOpened = true;
    }
  }

  // ==== Fokontany =======

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllFokontany(){
    this.apiFokontany.getAllFokontany().subscribe(
      data => {
        this.allFokontany = data;
        this.dataSource = new MatTableDataSource(this.allFokontany);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => {
        console.log(err);;
      }
    )
  }

  // =================

}
