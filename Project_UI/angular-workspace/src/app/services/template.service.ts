///////////////////////////////////////////////////////////////////////////////////////////////////////
//  FILE : Templates.ts
//  AUTHOR : Pranav Sehgal <PranavSehgalCS>
//
//  DESCRIPTION: Is a template ts model with constructor to encapsulate data 
//               USE this as a template to create your own ts data model 
///////////////////////////////////////////////////////////////////////////////////////////////////////
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Template } from '../model/Template';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
///////////////////////////////////////////////////////////////////////////////////////////////////////

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  public errString:string = "_";
  private templateUrl:string = 'http://localhost:8080/template';;

  constructor(private http: HttpClient) { }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
  getTemplates(temid:number): Observable<Template[]>{
    if(temid!=-1){ return this.http.get<Template[]>(this.templateUrl+String(temid)).pipe(); }
    return this.http.get<Template[]>(this.templateUrl).pipe();
  }

  createTemplate(tname:string, tmess:string, tbool:boolean): Observable<boolean>{
    const param = new HttpParams().append("tname", tname)
                                  .append("tmess", tmess)
                                  .append("tbool", tbool)
    return this.http.post<boolean>(this. templateUrl,null,{params:param});
  }

  updateTemplate(temind:number, tname:string, tmess:string, tbool:boolean): boolean{
    const param = new HttpParams().append("tname", tname)
                                  .append("tmess", tmess)
                                  .append("tbool", tbool)                     
    var retVal = this.http.put(this.templateUrl,null,{params:param}).subscribe();
    return Boolean(retVal)
  }

  deleteTemplate(temid:number): Observable<boolean>{
    const param = new HttpParams().append("temid", temid)
    return this.http.delete<boolean>(this.templateUrl,{params:param});
  }

  changeErr(err:string):void{
    this.errString = err;
  }
}
