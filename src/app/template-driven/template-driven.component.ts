import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('myForm', {static: true}) myForm:any;
  constructor(private location: Location, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onSubmit() {
    this.myForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

  goBackHome(): void{
    this.router.navigate(['home']); // absolute path
    //this.router.navigate(['home', 1]); absolute path
    //this.router.navigate(['home', 1], {relativeTo: this.route});  relative path
  }
  
  goBackHomeByUrl(): void{
    this.router.navigateByUrl('home'); // absolute path
    //this.router.navigateByUrl('/home/1'); absolute path
  }
}
