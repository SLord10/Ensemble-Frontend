import {Injectable} from "@angular/core";
import {BehaviorSubject, delay, finalize, Observable, of, switchMap, tap} from "rxjs";

@Injectable()
export class LoadingService {

    private loadingSubject = new BehaviorSubject<boolean>(false)
    loading$ = this.loadingSubject.asObservable()

    showLoadingUntilComplete<T>(obs$ : Observable<T>): Observable<T>{
        return of(null).pipe(
            tap(() => this.loadingOn()),
            delay(2000),
            switchMap(() => obs$),
            finalize(() => this.loadingOff())
        )
    }


    loadingOn(){
        this.loadingSubject.next(true)
    }

    loadingOff(){
        this.loadingSubject.next(false)
    }

}
