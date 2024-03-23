import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  saveData(key:string, value:any) {
    localStorage?.setItem(key, JSON.stringify(value));
  }

  saveIndex(key:string, value:string) {
    localStorage.setItem(key, value);
  }

  getData(key:string) {
    return JSON.parse(localStorage?.getItem(key) || '{}');
  }

  getIndex(key:string) {
    return localStorage.getItem(key);
  }

  removeData(key:string) {
    localStorage?.removeItem(key);  
  }

  removeIndex(key:string) {
    localStorage.removeItem(key);
  }
  
  clearData() {
    localStorage?.clear();
  }
}
