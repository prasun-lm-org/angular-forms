import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  myForm: FormGroup;

  constructor(private location:Location, private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        uname: new FormControl('Prasun', Validators.required),
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
    this.router.navigate(['home']);
  }

}
