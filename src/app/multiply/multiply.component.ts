import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatrixAPIService } from '../matrix-api.service';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.scss'],
})
export class MultiplyComponent implements OnInit {
  constructor(private matrixAPI: MatrixAPIService, private router: Router) {}

  rowmatrix1: number = 4;
  colmatrix1: number = 3;
  rowmatrix2: number = 3;
  colmatrix2: number = 2;
  ngOnInit(): void {}

  arraycreation(cant: number, name: string) {
    return Array(cant)
      .fill(1)
      .map((x, i) => name + (x + i));
  }

  ClickMultiplyMatrices() {
    console.log('multiply');
    this.matrixAPI.strMatrixA = '';
    this.matrixAPI.MatrixA = [];
    for (let i = 1; i <= this.rowmatrix1; i++) {
      let strMatrixRow = '[';
      let MatrixRow = [];
      for (let j = 1; j <= this.colmatrix1; j++) {
        let val = (<HTMLInputElement>(
          document.getElementsByName('MatrixA-row' + i + 'col' + j)[0]
        )).value;
        MatrixRow.push(val);
        strMatrixRow += strMatrixRow == '[' ? val : ',' + val;
      }
      this.matrixAPI.MatrixA.push(MatrixRow);
      this.matrixAPI.strMatrixA +=
        this.matrixAPI.strMatrixA == ''
          ? strMatrixRow + ']'
          : ',' + strMatrixRow + ']';
    }
    this.matrixAPI.strMatrixB = '';
    this.matrixAPI.MatrixB = [];
    for (let i = 1; i <= this.rowmatrix2; i++) {
      let strMatrixRow = '[';
      let MatrixRow = [];
      for (let j = 1; j <= this.colmatrix2; j++) {
        let val = (<HTMLInputElement>(
          document.getElementsByName('MatrixB-row' + i + 'col' + j)[0]
        )).value;
        MatrixRow.push(val);
        strMatrixRow += strMatrixRow == '[' ? val : ',' + val;
      }
      this.matrixAPI.MatrixB.push(MatrixRow);
      this.matrixAPI.strMatrixB +=
        this.matrixAPI.strMatrixB == ''
          ? strMatrixRow + ']'
          : ',' + strMatrixRow + ']';
    }
    console.log(this.matrixAPI.MatrixA);
    console.log(this.matrixAPI.MatrixB);
    this.router.navigate(['multiplyresult']);
  }
}
