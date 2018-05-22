import { Injectable, OnInit } from '@angular/core';
import { MenuItem } from './header';

@Injectable()
export class HeaderService implements OnInit {

  items: MenuItem[];
  navItems: MenuItem[];
  menuItems: MenuItem[];

  constructor() { 

  }

  ngOnInit(){
      
  }
}