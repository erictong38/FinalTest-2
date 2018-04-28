import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;
//Added 3 new pages
//Addedd 2 more pages, and adjusted accordingly
  pages: PageInterface[] = [
    {title: 'Personal Profile', pageName: 'HomePage', tabComponent: 'CvPage', index: 0, icon: 'clipboard'},
    {title: 'Technical Skills', pageName: 'HomePage', tabComponent: 'HomePage', index: 1, icon: 'clipboard'},
    {title: 'Soft Skills', pageName: 'HomePage', tabComponent: 'SoftskillPage', index: 2,  icon: 'clipboard'},
    {title: 'Contact', pageName: 'HomePage', tabComponent: 'ContactPage', index: 6,  icon: 'information'},
    {title: 'Log out', pageName: 'HomePage', tabComponent:'ContactPage', index: 6, icon: 'arrow-forward'}
    

  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface){
let params ={};

if(page.index){
  params = {tabIndex: page.index};
}
if(this.nav.getActiveChildNav() && page.index != undefined) {
  this.nav.getActiveChildNav().select(page.index);
} else {
  this.nav.setRoot(page.pageName, params);
}
  }

    isActive(page: PageInterface){
      let childNav = this.nav.getActiveChildNav();

      if(childNav){
        if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
          return 'primary';
        }
        return;

      }
      if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
        return 'primary';
      }
  }

} 