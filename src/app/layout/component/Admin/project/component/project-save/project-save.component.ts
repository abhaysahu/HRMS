import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-project-save',
  templateUrl: './project-save.component.html',
  styleUrls: ['./project-save.component.css']
})
export class ProjectSaveComponent implements OnInit {
  public Editor = ClassicEditor;
  Project: any[] = [];


 
  constructor() { }

  ngOnInit() {
  }
  onSubmit(project) {
    console.log(project)  
  }
}
 