import { SharedService } from 'src/app/modules/global/services/shared.service';
import { Usuario } from './../../../modules/basico/domain/usuario.model';
import { ChangeDetectorRef, Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
import { UserService } from 'src/app/modules/basico/services/user.service';
import { CurrentUser } from 'src/app/modules/global/model/current-user.model';

@Component({
  selector: 'fury-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInUpAnimation]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;
  usuario: Usuario = new Usuario();

  constructor(private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private service: UserService,
    private shared: SharedService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  send() {
    this.service.login(this.form.value).subscribe(data => {
      this.shared.logando(new CurrentUser(data.body.user, data.body.access_token));
      this.router.navigate(['/']);
    }, err =>
      this.snackbar.open('Usuario ou senha inválida', 'OK', {
        duration: 10000
      })
    );
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
