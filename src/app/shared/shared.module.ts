import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { NavbarComponent } from './navbar/navbar.component';
import { Angulartics2Module } from 'angulartics2';
import { NavbarService } from './service/navbar.service';
import { ToolbarService } from './service/toolbar.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterializeModule,
    Angulartics2Module.forChild()
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [
    NavbarService,
    ToolbarService
  ]
})
export class SharedModule {}
