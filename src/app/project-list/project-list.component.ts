import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import {Projects} from 'src/app/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Projects[];

  constructor(private rs: RestService) {
  }
  headers = ['project_id', 'project_name', 'project_manager']

  ngOnInit() {
    this.rs.readProject().subscribe(data => {
        // @ts-ignore
        this.projects = data;
      },
      console.error
    );
  }}
