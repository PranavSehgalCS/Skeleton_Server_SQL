import { Component } from '@angular/core';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['../template-styles.css']
})
export class CreateTemplateComponent {
  constructor(public tempService:TemplateService){}

  async submitForm(tname:string, tmess:string, tbool:boolean){
    if(tname.length == 0){
      this.tempService.changeErr("Enter A Name");
    }else if(tmess.length == 0){
      this.tempService.changeErr("Enter A Message");
    }else{
      var retVal:boolean =false;
      await this.tempService.createTemplate(tname,tmess,tbool).subscribe(res => { retVal=res; });
      await this.tempService.delay(500);
      if(retVal){
        alert("Template Created Successfully!!");
      }else{
        alert("Error While Creating New Template");
      }
      location.reload();
    }
  }
}
