///////////////////////////////////////////////////////////////////////////////////////////////////////    
package com.project.api.projectapi.model;

//  FILE : Template.java
//  AUTHOR : Pranav Sehgal <PranavSehgalCS>
//
//  DESCRIPTION: Is a template Model with a public model to encapsulate data
//               USE this as a template to create your own model 

///////////////////////////////////////////////////////////////////////////////////////////////////////
public class Template {
    private int temid;
    private String tname;
    private String tmess;
    private Boolean tbool;

    public Template(int temid, String tname, String tmess, Boolean tbool){
        this.temid = temid;
        this.tname = tname;
        this.tmess = tmess;
        this.tbool = tbool;
    }

    public int getID(){
        return this.temid;
    }
    public String getName(){
        return this.tname;
    }
    public String getMessage(){
        return this.tmess;
    }
    public Boolean getBool(){
        return this.tbool;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////