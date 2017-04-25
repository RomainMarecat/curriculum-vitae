import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './../service/navbar.service';
import { ToolbarService } from './../service/toolbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sidenav: Object;
  toolbar: Object;

  constructor(private router: Router,
    private navbarService: NavbarService,
    private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.sidenav = this.navbarService.getSideNavData();
    this.toolbar = this.toolbarService.getToolbarData();

  }

}
