import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list'


@Component({
    selector: 'tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    /**
     * This page has the button tabs for the other pages
     */
    tab1Root: any = HomePage;
    tab2Root: any = ListPage;
    
    constructor(){

    }
}