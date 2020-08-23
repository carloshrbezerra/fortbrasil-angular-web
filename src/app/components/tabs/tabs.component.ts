import { Component, OnInit, ContentChildren, AfterContentInit, Input } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {

  @Input('tab-class') tabClass: string = 'nav-pills'; 
  @ContentChildren(TabComponent) tabs: TabComponent[] = [];
  constructor() { }


  ngOnInit() {
  }

  ngAfterContentInit(){
    
  }

  selectTab(id: string){
    this.tabs.forEach(t => t.active = false);
    let tab = this.tabs.find(t => t.id == id);
    tab.active = true;
  }

}
