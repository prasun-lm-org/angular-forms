import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('myForm', {static: true}) myForm:any;
  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.myForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

  goBackHome(): void{
    this.router.navigate(['home']);
  }
}
