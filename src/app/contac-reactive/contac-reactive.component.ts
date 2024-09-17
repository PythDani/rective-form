import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contac-reactive',
  templateUrl: './contac-reactive.component.html',
  styleUrls: ['./contac-reactive.component.css']
})
export class ContacReactiveComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3),]],
      phone: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form ->', this.contactForm.value);
  }

}
