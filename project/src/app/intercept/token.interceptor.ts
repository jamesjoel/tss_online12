// import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';


export class TokenInterceptor implements HttpInterceptor{

    intercept(req:HttpRequest<any>, next : HttpHandler){
        if(localStorage.getItem("token")){
            let token = localStorage.getItem("token");
            req = req.clone({ headers : req.headers.set("Authorization", token)})
        }
        return next.handle(req);
    }
}

/*
    http://localhost:3000/api/user



    https://localhost:3000/user




*/