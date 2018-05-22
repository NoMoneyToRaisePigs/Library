import { Injectable, OnInit } from '@angular/core';
import { MenuItem, NavBar } from './header';

@Injectable()
export class HeaderService{

  items: MenuItem[] = [];
  navItems: MenuItem[] = [];
  menuItems: MenuItem[] = [];
  logoWidth: number = 200;
  notificationWidth: number = 200;
  navItemWidth: number = 80;
  
  testNav: NavBar = {navItems:[]};

  constructor() { 
        this.items.push(<MenuItem>{name:'Library', url: 'library'});
        this.items.push(<MenuItem>{name:'Resume', url: 'resume'});
        this.items.push(<MenuItem>{name:'test1', url: 'resume'});
        this.items.push(<MenuItem>{name:'test2', url: 'resume'});
        this.items.push(<MenuItem>{name:'test3', url: 'resume'});
        this.items.push(<MenuItem>{name:'test4', url: 'resume'});
        this.items.push(<MenuItem>{name:'test5', url: 'resume'});
        this.items.push(<MenuItem>{name:'test6', url: 'resume'});
        this.items.push(<MenuItem>{name:'test7', url: 'resume'});
        this.items.push(<MenuItem>{name:'test8', url: 'resume'});
        this.items.push(<MenuItem>{name:'test9', url: 'resume'});
  }

  populateMenu(){
      this.testNav.navItems = [];

      let screenWidth = window.innerWidth;
      let spaceForNavItems = screenWidth - this.logoWidth - this.notificationWidth;
      let numberOfItemInNavBar = Math.trunc(spaceForNavItems / this.navItemWidth);

      this.navItems = [];
      this.menuItems = [];
      if(numberOfItemInNavBar >= this.items.length){
        this.items.forEach(item =>{
          this.navItems.push(item);
        });
      }
      else if(numberOfItemInNavBar >= 1 && numberOfItemInNavBar < this.items.length ){
        for(let i =0; i <= numberOfItemInNavBar; i++){
          this.testNav.navItems.push(this.items[i]);
          this.navItems.push(this.items[i]);
        }
        for(let j = numberOfItemInNavBar+1; j <= this.items.length; j++){

          this.menuItems.push(this.items[numberOfItemInNavBar]);
        }
      }
  }
}