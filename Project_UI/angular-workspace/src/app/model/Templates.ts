///////////////////////////////////////////////////////////////////////////////////////////////////////
//  FILE : Templates.ts
//  AUTHOR : Pranav Sehgal <PranavSehgalCS>
//
//  DESCRIPTION: Is a template ts model with constructor to encapsulate data 
//               USE this as a template to create your own ts data model 
///////////////////////////////////////////////////////////////////////////////////////////////////////
export class Template{
    public temid:number = 0;
    public tname:string = "";
    public tmess:string = "";
    public tbool:boolean = false;

    public constructor(init?:Partial<Template>) {
        Object.assign(this, init);
    }
    public getString():string{
        var retVal:string = "";
        retVal = retVal + "{temid:"+this.temid.toString();
        retVal = retVal + ",tname:"+this.tname;
        retVal = retVal + ",tmess:"+this.tmess;
        retVal = retVal + ",tbool:"+this.tbool.toString()+"}\n";
        return retVal;
    }
}