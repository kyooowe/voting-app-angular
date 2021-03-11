import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  adminClicked = false;
  currentRoute = "";
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(val => {
      this.currentRoute = this.router.url;
      if(this.currentRoute === '/admin') {
        this.adminClicked = true;
      } else {
        this.adminClicked = false;
      }
    })
  }

  checkRoute(event) {
    console.log(event)
  }

}
