import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateUsername } from '../validators/username.validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  myForm: FormGroup;

  constructor(private location:Location, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        uname: new FormControl('Prasun', [Validators.required, ValidateUsername]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        readTerms: new FormControl(false)
      }
    );
  }

  onSubmit() {
    this.myForm.reset();
  }

  accept() {
    /*this.myForm.setValue({
      uname: 'Prasun',
      email: null,
      readTerms: true
    });*/
    this.myForm.patchValue({
      readTerms: true
    });
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
