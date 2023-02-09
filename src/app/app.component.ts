import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  observableData:any;
  observableData_1: any;
  subjectData:any
  constructor() {}

  getObservableData(){
    let myObservable= new Observable<any>(observer=>{
      observer.next("Please go to office")
    })
    myObservable.subscribe((data)=>{
      this.observableData= data
    })


    const source = of(1, 2, 3, 4, 5);
    source.subscribe((data)=>{
      this.observableData_1= data;
    })
  }

  getSubjectData(){
    let mySubject= new Subject();
    mySubject.next("Please go to office");
    mySubject.subscribe((data)=>{
      this.subjectData= data;
    })

    mySubject.next("Please go to office");
    mySubject.next([2,2,3,4,5]);
  }
}
