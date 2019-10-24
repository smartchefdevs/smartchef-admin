import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../_services/category.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  listOfData;
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getListCategories().subscribe(data =>{
      console.log(data["data"])
      this.listOfData = data["data"];
    })
  }

}
