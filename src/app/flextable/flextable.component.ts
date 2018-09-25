import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { PerfectScrollbarConfigInterface,PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import * as $ from 'jquery';

@Component({
  selector: 'app-flextable',
  templateUrl: './flextable.component.html',
  styleUrls: ['./flextable.component.css']
})

export class FlextableComponent implements OnInit {

  displayedColumns = ['position', 'name', 'grade', 'salary'];
  data = Object.assign(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(this.data);
  // dataSource = ELEMENT_DATA;
  @ViewChild(PerfectScrollbarDirective) directiveRef?: PerfectScrollbarDirective;
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  @ViewChild(MatSort) sort: MatSort;

  public config: PerfectScrollbarConfigInterface = {};

  ngOnInit() {
    this.dataSource.sort = this.sort;
    //console.log("OffSet : "+$($("#table")[1]).offset().top());
  }
  public scrollToY(grade : any): void { 
    console.log("Value of grade: "+grade);
    var indexValue = ELEMENT_DATA.map(function (element) { return element.grade; }).indexOf(grade);
        
    console.log("Value of index: "+indexValue);    
    var position = 60 + (indexValue * 48);

    console.log("Value of position: "+position);
    this.componentRef.directiveRef.scrollToY(position, 300);
  }
 
  addElement(grade:any) {
    var index = ELEMENT_DATA.map(function (element) { return element.grade; }).indexOf(grade);
    console.log("Value of index: "+index);

    ELEMENT_DATA.splice(index,0,{position: index, name: 'Vijay'+1, grade: grade, salary: Math.random()* 10000000000000000 })
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
}

export interface Element {
  name: string;
  position: number;
  grade: string;
  salary: number;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Vijay', grade: 'G2', salary: 22000 },
  { position: 2, name: 'Raj', grade: 'G2', salary: 22000 },
  { position: 3, name: 'Kumar', grade: 'G2', salary: 20000 },
  { position: 4, name: 'Venkat', grade: 'G2', salary: 25000 },
  { position: 5, name: 'Vasanth', grade: 'G2', salary: 25000 },
  { position: 6, name: 'Prashant', grade: 'G4', salary: 45000 },
  { position: 7, name: 'Sasi', grade: 'G4', salary: 40000 },
  { position: 8, name: 'Sidd', grade: 'G4', salary: 40000 },
  { position: 9, name: 'Sathish', grade: 'G4', salary: 38000 },
  { position: 10, name: 'Guru', grade: 'G4', salary: 40000 },
  { position: 11, name: 'Dinesh', grade: 'G6', salary: 40000 },
  { position: 12, name: 'Karthi', grade: 'G6', salary: 43000 },
  { position: 13, name: 'Mari', grade: 'G6', salary: 35000 },
  { position: 14, name: 'Sethu', grade: 'G6', salary: 48000 },
  { position: 15, name: 'Vicky', grade: 'G6', salary: 60000 },
  { position: 16, name: 'Ajith', grade: 'G8', salary: 48000 },
  { position: 17, name: 'Tamil', grade: 'G8', salary: 45000 },
  { position: 18, name: 'Sai', grade: 'G8', salary: 35000 },
  { position: 19, name: 'Anbu', grade: 'G8', salary: 80000 },
  { position: 20, name: 'Aravind', grade: 'G8', salary: 45000 },
];