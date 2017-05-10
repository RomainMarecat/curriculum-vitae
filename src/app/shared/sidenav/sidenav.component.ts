import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './../service/navbar.service';
import { ToolbarService } from './../service/toolbar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidenav: any;
  toolbar: any;

  constructor(private router: Router,
    private navbarService: NavbarService,
    private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.sidenav = this.navbarService.getSideNavData();
    this.toolbar = this.toolbarService.getToolbarData();

  }
}
