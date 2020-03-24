import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Projects} from '../project';
import { NgForm } from '@angular/forms';
import { FormBuilder} from '@angular/forms';

import { AddprojectService} from '../addproject.service';


@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  setupForm = new FormGroup({
    projectID: new FormControl(''),
    projectName: new FormControl(''),
    projectManager: new FormControl(''),
  });

  constructor(private addprojectservice: AddprojectService) { }

  ngOnInit() {
  }
  addProject() {}
  onSubmit() {
    console.warn(this.setupForm.value);
    const projects = {} as Projects;
    projects.project_id = this.setupForm.value.projectID;
    projects.project_name = this.setupForm.value.projectName;
    projects.project_manager = this.setupForm.value.projectManager;
    this.addprojectservice.addProject(projects);
    console.warn(projects.project_name);
  }
}
