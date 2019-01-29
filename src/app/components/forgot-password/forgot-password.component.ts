import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  ngOnInit() {
  }

  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private loginService: LoginService) {}

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  onResetPasswordClick(): void {
    this.loginService.forgotPassword(this.data).subscribe(
        result => {
            this.onCloseDialog();
        },
        error => {
            console.log(error);
        }
    );
  }

}
