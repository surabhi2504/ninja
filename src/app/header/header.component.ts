import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../userDetails';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: UserDetails;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
    // console.log(this.router.getCurrentNavigation().extras.state); 
   }
  ngOnInit() {
    this.user=history.state;
  }

}
