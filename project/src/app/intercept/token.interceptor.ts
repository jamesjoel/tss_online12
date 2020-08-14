// import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpInterceptor } from '@angular/common/http';


export class TokenInterceptor implements HttpInterceptor{

    intercept(req:HttpRequest<any>, next : HttpHandler){
        if(localStorage.getItem("token")){
            let token = localStorage.getItem("token");
            req = req.clone({ headers : req.headers.set("Authorization", token)})
        }
        return next.handle(req); // continue req to its way
    }
}

/*
    return this._http.get<any>("localhost:3000/api/user",{
        headers : { "Authorization" : token }
    });





    http://localhost:3000/api/user



    https://localhost:3000/user




*/