import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.scss']
})
export class EmployeeEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employeeInformation = new FormGroup({
    employeeId: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    employeeName: new FormControl('',[Validators.required]),
    fatherName: new FormControl(''),
    motherName: new FormControl(''),
    dateOfBirth: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    maritalStatus: new FormControl(''),
    religion: new FormControl(''),

    officialInformation: new FormGroup({
      employeeType: new FormControl('',[Validators.required]),
      grade: new FormControl('',[Validators.required]),
      department: new FormControl('',[Validators.required]),
      designation: new FormControl('',[Validators.required]),
      location: new FormControl('',[Validators.required]),
      joiningDate: new FormControl('',[Validators.required]),
      tinNo: new FormControl(),
    }),

    address: new FormGroup({
      mobile: new FormControl('',[Validators.required]),
      presentAddress: new FormControl('',[Validators.required]),
      permanentAddress: new FormControl('',[Validators.required]),
      qualification: new FormControl(),
      remarks: new FormControl(),
      email: new FormControl('',[Validators.email,Validators.required]),
      status: new FormControl()
    }),
  });


  onSubmit(){
    console.warn(this.employeeInformation.value);
  }

  get employeeId(){
    return this.employeeInformation.get('employeeId');
  }
  get employeeName(){
    return this.employeeInformation.get('employeeName');
  }
  get dateOfBirth(){
    return this.employeeInformation.get('dateOfBirth');
  }
  get gender(){
    return this.employeeInformation.get('gender');
  }
  get employeeType(){
    return this.employeeInformation.get('officialInformation.employeeType');
  }
  get grade(){
    return this.employeeInformation.get('officialInformation.grade');
  }
  get department(){
    return this.employeeInformation.get('officialInformation.department');
  }
  get designation(){
    return this.employeeInformation.get('officialInformation.designation');
  }
  get location(){
    return this.employeeInformation.get('officialInformation.location');
  }
  get joiningDate(){
    return this.employeeInformation.get('officialInformation.joiningDate');
  }
  get mobile(){
    return this.employeeInformation.get('address.mobile');
  }
  get presentAddress(){
    return this.employeeInformation.get('address.presentAddress');
  }
  get permanentAddress(){
    return this.employeeInformation.get('address.permanentAddress');
  }
  get email(){
    return this.employeeInformation.get('address.email');
  }


}
