import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course={courseTitle:"",
  courseDescription:"",
  courseDate:"",
  courseVenu:"",
  courseDuration:""
}

  constructor() { }

  ngOnInit(): void {
  }

}