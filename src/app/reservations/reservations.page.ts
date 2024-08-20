import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  detail() {
    this.router.navigate(['/detail-billet'])
console.log('test')
  }
}
