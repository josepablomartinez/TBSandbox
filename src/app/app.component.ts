import { CompileMetadataResolver } from '@angular/compiler';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

//defines interface for data
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

//simulated data
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Hydrogen2', weight: 10.0079, symbol: 'H'},
  {position: 12, name: 'Helium2', weight: 14.0026, symbol: 'He'},
  {position: 13, name: 'Lithium2', weight: 6.1, symbol: 'Li'},
  {position: 14, name: 'Beryllium2', weight: 29.22, symbol: 'Be'},
  {position: 15, name: 'Boron2', weight: 20.811, symbol: 'B'},
  {position: 16, name: 'Carbon2', weight: 14.7, symbol: 'C'},
  {position: 17, name: 'Nitrogen2', weight: 19.0067, symbol: 'N'},
  {position: 18, name: 'Oxygen2', weight: 15.04, symbol: 'O'},
  {position: 19, name: 'Fluorine2', weight: 28.9984, symbol: 'F'},
  {position: 20, name: 'Neon2', weight: 20.17, symbol: 'Ne'},

];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  

export class AppComponent  {
  apptitle = 'Custom Source ';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  data = ELEMENT_DATA;
  pageSize = 10;
  pageIndex = 0; 
  sortedData : PeriodicElement[];
  //dataSource = ELEMENT_DATA;  

  //constructor
  constructor() {
    this.sortedData = this.data.slice(this.pageIndex, this.pageIndex+this.pageSize);
  }



  //defines sort function
  sortData(sort:Sort) {
    const localData = this.data.slice(this.pageIndex, this.pageIndex+this.pageSize);
    if(!sort.active || sort.direction === '') {
      this.sortedData = localData;
      return;
    }


    this.sortedData = localData.sort((a,b) => {
      const isAsc = sort.direction === 'asc';
      switch(sort.active)
      {
        case 'position': return compare(a.position, b.position, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'weight': return compare(a.weight, b.weight, isAsc);
        case 'symbol': return compare(a.symbol, b.symbol, isAsc);
        default: return 0;
      }

    })
  }

  onPaginate(pageEvent: PageEvent) {
    const localData = this.data.slice();
    this.pageSize = +pageEvent.pageSize;
    this.pageIndex = +pageEvent.pageIndex;
    this.sortedData = localData.slice(this.pageIndex, this.pageIndex+this.pageSize);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


