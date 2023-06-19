///////////////////////////////////////////////////////////////////////////////////////////////////////
//  FILE : Templates.ts
//  AUTHOR : Pranav Sehgal <PranavSehgalCS>
//
//  DESCRIPTION: Is a template ts model with constructor to encapsulate data 
//               USE this as a template to create your own ts data model 
///////////////////////////////////////////////////////////////////////////////////////////////////////
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Template } from '../model/Templates';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
///////////////////////////////////////////////////////////////////////////////////////////////////////

@Injectable({
  providedIn: 'root'
})
export class TemplateServicesService {


  constructor() { }
}
