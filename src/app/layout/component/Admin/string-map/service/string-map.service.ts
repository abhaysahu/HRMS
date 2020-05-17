import { Injectable } from '@angular/core';
import { Popup } from '../model/popup.module';

@Injectable({
  providedIn: 'root'
})
export class StringMapService {

  stringMapPopup: Popup[]=[]

  constructor() { }
}
