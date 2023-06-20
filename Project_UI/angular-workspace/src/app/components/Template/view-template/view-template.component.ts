/*///////////////////////////////////////////////////////////////////////////////////////////////////////
*   FILE  : view-template.component.ts
*   AUTHOR : Pranav Sehgal
*            +Auto-generated on :
*                    ng generate new component view-template 

*   DESCRIPTION : USED as the typescript file for Viewing Templates
*                 USES Template model to encapsulate data
*                 USES TemplateService service to communicate with backend 
*                 TO CREATE new component, use ng generate new component <component name>
///////////////////////////////////////////////////////////////////////////////////////////////////////*/

import { Component } from '@angular/core';
import { Template} from 'src/app/model/Template';
import { TemplateService } from 'src/app/services/template.service';
///////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['../template-styles.css']
})
///////////////////////////////////////////////////////////////////////////////////////////////////////*/
export class ViewTemplateComponent {
  constructor(public tempService:TemplateService){
  }
  
  public retVal:string="";
  public line:boolean = true;
  public refresh:boolean =true;
  public templateMap:Map<number,Template> = new Map<number,Template>();
  
  mapToArr():Template[]{
    return Array.from(this.templateMap.values());
  }

  ngOnInit(){
    this.tempService.getTemplates(-1).subscribe(res => {
      for(let temp of res){
        this.templateMap.set(temp.temid,temp)
      }
    });
  }

  public getLine():string{
    this.line = !this.line;
    if(this.line){
      return "info-line";
    }
    return "info-line2";
  }

  async delButton(temid:number){
    if(confirm("Are You Sure You Want To Delete This?")){
      var retVal:boolean = false;
      await this.tempService.deleteTemplate(temid).subscribe(res => { retVal = res; });
      await this.tempService.delay(100);
      this.templateMap.delete(temid);
      this.refresh = true;
    }
  }
}
