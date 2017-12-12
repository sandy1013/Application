import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";


export interface UserData {
    username: string;
}

export class LoginResolve implements Resolve<UserData> {
    resolve(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot 
    ) : Observable<UserData> | Promise<UserData> | UserData {
        return {
            username : 'santosh'
        }
    }
}