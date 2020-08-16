import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-leaves',
  templateUrl: './my-leaves.component.html',
  styleUrls: ['./my-leaves.component.css']
})
export class MyLeavesComponent implements OnInit {
  Leaves ={
    year:null,
    dateOfJoining:null
  }
  dropDownListOfYear: any[]=[]
  dropDownListOfMonth:any[]=[]
  month:any[]=[]
  data={}

  constructor() {



    this.month=[
      {
        Value:1,
        Text:"Jan"
      },
      {
        Value:2,
        Text:"Feb"
      },
      {
        Value:3,
        Text:"Mar"
      },
      {
        Value:4,
        Text:"Apr"
      },
      {
        Value:5,
        Text:"May"
      },
      {
        Value:6,
        Text:"Jun"
      },
      {
        Value:7,
        Text:"Jul"
      },
      {
        Value:8,
        Text:"Aug"
      },
      {
        Value:9,
        Text:"Sep"
      },
      {
        Value:10,
        Text:"Oct"
      },
      {
        Value:11,
        Text:"Nov"
      },
      {
        Value:12,
        Text:"Dec"
      },
    ]


    //convert all the backend date into UI date

    let date =new Date("2020-08-06T19:25:06.66").toDateString().substr(4,13)




    //get the year of my attendance
    
    // let doj=new Date("2017-08-06");

    // let Tod=new Date();

    // let yearOfDOJ=doj.getFullYear()
    // let yearOfTOD=Tod.getFullYear();

    // let diff =Tod.getFullYear()-doj.getFullYear(); 
    // console.log(diff)

    // for (let i=0;i<(diff+1);i++)
    // {
    //   this.data={
    //     Value:yearOfDOJ+i,
    //     Text:yearOfDOJ+i,
    //   }

    //   this.dropDownListOfYear.push(this.data)
    // }

    // console.log(this.dropDownListOfYear)


    





    //get the month of all the year;


    // let year =2020

    // console.log(year)

    // let doj=new Date("2017-08-06");

    // let Tod=new Date("2020-08-13");

    // let yearOfDOJ=doj.getFullYear()
    // let yearOfTOD=Tod.getFullYear();

    // console.log(yearOfDOJ)
    // console.log(yearOfTOD)

    // if(year==yearOfDOJ && year!=yearOfTOD)
    // {
    //   // console.log((doj.getMonth()+1).toString())

    //   for(let i=doj.getMonth();i<12;i++)
    //   {
    //     this.data={
    //           Value:this.month[i].Value,
    //           Text:this.month[i].Text,
    //         }
      
    //         this.dropDownListOfMonth.push(this.data)
    //   }

    //   console.log(this.dropDownListOfMonth)
    // }

  
    // else if(year>yearOfDOJ && year!=yearOfTOD)
    // {
    //   this.dropDownListOfMonth=this.month
    //   console.log(this.dropDownListOfMonth)
    // }

    // else if(year==yearOfTOD)
    // {

    //   for(let i=0;i<doj.getMonth()+1;i++)
    //   {
    //     this.data={
    //           Value:this.month[i].Value,
    //           Text:this.month[i].Text,
    //         }
    //         this.dropDownListOfMonth.push(this.data)
    //   }
    //   console.log(this.dropDownListOfMonth)
    // }




   }

  ngOnInit() {
  }
  onSubmit(leaves) {
    console.log(leaves) 
  }
}

