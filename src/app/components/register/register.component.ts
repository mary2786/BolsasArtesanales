import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { BolsasService } from 'src/app/services/bolsas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  loginForm: FormGroup;

  constructor(private userSrv:BolsasService, private router:Router) { 
    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required])
    });

    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

  ngOnInit() {
    
  }

  createUser() {
    this.userSrv.createUser(this.userForm.value)
      .subscribe( res => {
        const result = JSON.parse(JSON.stringify(res));
        alert(result.message);
        if(result.status=='OK'){
          this.router.navigate(['/registro'])
        }
      }, (err) => {
        console.log(err);
      })
    }

    login() {
      this.userSrv.login(this.loginForm.value)
      .subscribe( res => {
        const result = JSON.parse(JSON.stringify(res));
        if(result.status=='OK'){
          localStorage.setItem('token', "1");
          this.router.navigate(['/facturacion'])
        }else{
          alert(result.message);
        }
        
      }, (err) => {
        console.log(err);
      })
      }
}
