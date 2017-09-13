import { Component, OnInit, ViewChild } from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {Menu} from "primeng/components/menu/menu";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

   menuItems: MenuItem[];
  subMenuItems: MenuItem[];

  @ViewChild('bigMenu') bigMenu : Menu;
  @ViewChild('smallMenu') smallMenu : Menu;

constructor(){

}

  ngOnInit(){
  this.menuItems = [
    {label: 'US'},
    {label: 'en_CA'},
    {label: 'fr_CA'},
    {label: 'CN'}
  ]
}
}
