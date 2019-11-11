import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/global/models/User';
import { NotificationHelper } from '../../global/helpers/notification.helper';
import { AppSettings } from '../../global/constants/constants';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  validateForm: FormGroup;
  listOfData;
  usuario: User;
  constructor(private userService:UserService, 
    private fb: FormBuilder,
    private notificationHelper: NotificationHelper ) { }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.usuario.id_profile = 1;
    this.usuario.full_name = this.validateForm.value.nickname;
    this.usuario.pass= this.validateForm.value.password;
    this.usuario.mail = this.validateForm.value.email;
    this.usuario.address = this.validateForm.value.address;
    if(this.usuario.id === undefined){
      this.userService.createUser(this.usuario).subscribe(resp => {
        resp;
        this.notificationHelper.buildNotification(AppSettings.ALERT_SUCCESS, "Correcto!", "Se ha creado un nuevo usuario");
        this.isVisible = false;
        this.list();
      }, error => {
        console.log(error);
        this.notificationHelper.buildNotification(AppSettings.ALERT_ERROR, "Ooops!", "Parece que ha ocurrido algo..");

      });
    } else {
      this.userService.editUser(this.usuario).subscribe(resp => {
        resp;
        this.notificationHelper.buildNotification(AppSettings.ALERT_SUCCESS, "Correcto!", "Se ha editado un usuario");
        this.isVisible = false;
        this.list();
      }, error => {
        console.log(error);
        this.notificationHelper.buildNotification(AppSettings.ALERT_ERROR, "Ooops!", "Parece que ha ocurrido algo..");
      });
    }

   
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  editar(obj: any){
    this.isVisible = true;
    this.validateForm.setValue({email: obj.mail, password: obj.pass, checkPassword : obj.pass ,nickname: obj.full_name ,phoneNumberPrefix: '+57',phoneNumber:'314444',address: obj.address});
    this.usuario.id = obj.id;
  }

  eliminar(obj: any){
    this.usuario.id = obj.id;
    this.usuario.id_state = 2;

    this.userService.deleteUser(this.usuario).subscribe(resp => {
      resp;
      this.notificationHelper.buildNotification(AppSettings.ALERT_SUCCESS, "Correcto!", "Se ha desactivo un usuario");
      this.list();
    }, error => {
      console.log(error);
      this.notificationHelper.buildNotification(AppSettings.ALERT_ERROR, "Ooops!", "Parece que ha ocurrido algo..");

    });
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  list(){
    this.userService.getListUsers().subscribe(data => {
      console.log(data["msg"]);
      this.listOfData = data["msg"]; 
    })
  }

  ngOnInit() {
      this.list();
      this.validateForm = this.fb.group({
        email: [null, [Validators.email, Validators.required]],
        password: [null, [Validators.required]],
        checkPassword: [null, [Validators.required, this.confirmationValidator]],
        nickname: [null, [Validators.required]],
        phoneNumberPrefix: ['+86'],
        phoneNumber: [null, [Validators.required]],
        address: [null, [Validators.required]],
      });

      this.usuario = new User();
    
  }

  isVisible = false;
  isOkLoading = false;

  abrirForm1(): void {
    this.isVisible = true;

    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });

  this.usuario = new User();
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }


}
