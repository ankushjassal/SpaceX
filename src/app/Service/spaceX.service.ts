import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { SpaceX } from "../Model/SpaceX";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SpaceXService {
    launch_success = true;
    launch_fail = false;
    year: number;
    constructor(private http: HttpClient){}
    
    getdata(){
        return this.http.get<SpaceX[]>('https://api.spacexdata.com/v3/launches?limit=100');
    }
    launchSuccess(): Observable<any>{
        const opts = {params: new HttpParams({fromString: "&launch_success="+this.launch_success})};
        return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true');
    }
    launchFail(): Observable<any>{
        const opts = {params: new HttpParams({fromString: "&launch_failure="+this.launch_fail})};
        return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success=false');
    }    
}