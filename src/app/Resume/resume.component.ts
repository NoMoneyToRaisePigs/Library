import {Component, OnInit} from '@angular/core';
import { Http, Headers, RequestOptionsArgs, ResponseContentType } from '@angular/http';

@Component({
    selector:'resume',
    templateUrl:'resume.component.html'
})
export class ResumeComponent implements OnInit{
    responseContentType = ResponseContentType;

    constructor(private http: Http){}

    ngOnInit(){
    }

    testmethod(ele: HTMLElement){
        window.alert('haha');
        
    }

    download(){
        this.http.post('downloadresume',null, <RequestOptionsArgs>{headers: this.createHttpCallHeaders(), responseType: ResponseContentType.Blob }).map((response) =>{
            return response;
        }).subscribe((data) =>{
            let x = 0;
            var headers = data.headers.values();
            //var blob = new Blob([data.arrayBuffer()],{type:"application/pdf"});
            var blob = new Blob([data.blob()],{type:"application/pdf"});
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = "Filename.pdf";
            link.click();
        });

        // var oReq = new XMLHttpRequest();
        // oReq.open("GET", "/downloadresume", true);
        // oReq.responseType = "blob";

        // oReq.onload = function(oEvent) {
        //     var blobData = oReq.response;
        //     var blob = new Blob([blobData],{type:"application/pdf"});
        //     var link = document.createElement('a');
        //     link.href = window.URL.createObjectURL(blob);
        //     link.download = "Filename.pdf";
        //     link.click();
        // };

        // oReq.send();
    }

    private createHttpCallHeaders() {
        let headers = new Headers();


        headers.append('Content-Type', 'application/download');

        return headers;
    }
}

