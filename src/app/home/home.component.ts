import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  container2: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  this.container2.createComponent(customElements);
  }

}
