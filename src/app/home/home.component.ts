import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fields="fields";
  title="title";
  item="item";
  status=true;
  name="task name";
  description="task description";
  added=false;
  deleted=false;
  task=[

  ];

  constructor() { }

  ngOnInit() {
  }

  show_description(index)
  {
       console.log("working");
      this.task[index].display=true;

  }
  add_task()
  {
     console.log(this.name);
    if(this.name!="" && this.description!="")
    {
     var obj={"name":this.name,"description":this.description,"display":false};
      this.task.push(obj);
      console.log("added");
      this.added=true;
      setTimeout(() => this.added=false, 1500);
    }
    else
    {
      alert("fill fields please");
    }
  }
  delete_task(index)
  {
    this.task.splice(index,1);
    this.deleted=true;
    setTimeout(() => this.deleted=false, 1500);

  }
}
