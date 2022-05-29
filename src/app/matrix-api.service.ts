import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatrixAPIService {
  APIURL = 'https://localhost:7216/MatrixOperations/Multiply';

  MatrixA: any[][] = [];
  MatrixB: any[][] = [];
  strMatrixA: string = '';
  strMatrixB: string = '';
  constructor() {}
  multiplyMatrix(): any {
    var data = { StrMatrixA: this.strMatrixA, StrMatrixB: this.strMatrixB };
    return fetch(this.APIURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        return null;
      });
  }
}
