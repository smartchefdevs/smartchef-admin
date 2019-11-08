import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../_services/category.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppSettings } from '../../global/constants/constants';
import { NotificationHelper } from '../../global/helpers/notification.helper';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  listOfData;
  isVisibleOnCreate = false;
  isOkLoadingOnCreate = false;
  validateFormOnCreate: FormGroup;

  isVisibleOnEdit = false;
  isOkLoadingOnEdit = false;
  validateFormOnEdit: FormGroup;


  constructor(private categoryService:CategoryService, private fb:FormBuilder,
            private notificationHelper: NotificationHelper) { }

  ngOnInit() {

    this.validateFormOnCreate = this.fb.group({
      name: [null, [Validators.required]]
    });


    this.validateFormOnEdit = this.fb.group({
      name: ["", [Validators.required]],
      id: ["", [Validators.required]]
    });

    this.updateListCategories();

  }

  public updateListCategories(){
    this.categoryService.getListCategories().subscribe(data =>{
      console.log(data["data"])
      this.listOfData = data["data"];
    })
  }

  public deleteCategory(id:number){
    console.log(id)
    this.categoryService.deleteCategory(id).subscribe(data => {
      this.updateListCategories();
      this.isVisibleOnCreate = false;
      this.notificationHelper.buildNotification(AppSettings.ALERT_SUCCESS,"Eliminación de Categoría",
      "Se eliminó correctamente la categoría")

    })
  }

  /**
   * Create modal
   */
  showModalOnCreate(): void {
    this.isVisibleOnCreate = true;
  }

  handleOkOnCreate(): void {
    this.isOkLoadingOnCreate = true;
      this.isVisibleOnCreate = false;
      this.isOkLoadingOnCreate = false;
  }

  handleCancel(): void {
    this.isVisibleOnCreate = false;
  }

  submitFormOnCreate(): void {
      let name = this.validateFormOnCreate.value.name;
      this.categoryService.createCategory(name).subscribe(data => {
        this.updateListCategories();
        this.isVisibleOnCreate = false;
        this.notificationHelper.buildNotification(AppSettings.ALERT_SUCCESS,"Creación de Categoría",
        "Se creó correctamente la categoría")

      });
  }

  /**
   * Edit modal
   */

  showModalOnEdit(data): void {

    this.validateFormOnEdit = this.fb.group({
      name: [data.name, [Validators.required]],
      id: [data.id, [Validators.required]]
    });
    this.isVisibleOnEdit = true;
  }

  handleOkOnEdit(): void {
    this.isOkLoadingOnEdit = true;
    this.isVisibleOnEdit = false;
    this.isOkLoadingOnEdit = false;
  }

  handleCancelOnEdit(): void {
    this.isVisibleOnCreate = false;
  }

  submitFormOnEdit(): void {
      let id = this.validateFormOnEdit.value.id;
      let name = this.validateFormOnEdit.value.name;
      this.categoryService.editCategory(id,name).subscribe(data => {
        this.updateListCategories();
        this.isVisibleOnEdit = false;
        this.notificationHelper.buildNotification(AppSettings.ALERT_SUCCESS,"Edición de Categoría",
        "Se editó correctamente la categoría")

      });
  }

}
