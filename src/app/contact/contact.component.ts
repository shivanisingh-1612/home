import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 
  show: boolean;
  checkEmail: boolean;
  checkNumber: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.show = false;
  }


  password() {
    this.show = !this.show;
  }

  contactForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  ngOnInit() {
  }

  onSubmit() {
    const form = this.contactForm.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/xnqgeowz',
        { name: form.name, replyto: form.email,subject:form.subject, message: form.message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    alert("Thanks for Contacting me");
    this.contactForm.reset();

  }

}
