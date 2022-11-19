import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-designation-entry',
  templateUrl: './designation-entry.component.html',
  styleUrls: ['./designation-entry.component.scss']
})
export class DesignationEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  designation = new FormGroup({
    designationName : new FormControl('',Validators.required)
  });

  get designationName(){
    return this.designation.get('designationName');
  }

  onSubmit(){
    
  }

}
