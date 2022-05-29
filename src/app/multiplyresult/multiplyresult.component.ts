import { Component, OnInit } from '@angular/core';
import { MatrixAPIService } from '../matrix-api.service';

@Component({
  selector: 'app-multiplyresult',
  templateUrl: './multiplyresult.component.html',
  styleUrls: ['./multiplyresult.component.scss'],
})
export class MultiplyresultComponent implements OnInit {
  constructor(public MatrixAPI: MatrixAPIService) {}
  loading: boolean = true;
  message: string = '';
  MatrixC: any[][] = [];

  ngOnInit(): void {
    this.MatrixAPI.multiplyMatrix().then((response: any) => {
      this.loading = false;
      console.log('Success:', response);
      if (!response)
        this.message =
          'Something happen with the connection, go back and try again';
      if (response.status)
        this.message = response.detail + ', go back and try again';
      else this.MatrixC = response;
    });
  }

  showResult(strMatrix: string) {
    this.MatrixC = [];
    var MatrixRows = strMatrix.split('],[');
    for (let i = 0; i < MatrixRows.length; i++) {
      let matrixrow = [];
      let matrixcolumns = MatrixRows[i].split(',');
      for (let j = 0; j < matrixcolumns.length; j++) {
        matrixrow.push(matrixcolumns[j].replace('[', '').replace(']', ''));
      }
      this.MatrixC.push(matrixrow);
    }
    console.log(strMatrix);
  }
}
