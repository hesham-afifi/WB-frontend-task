import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { tap } from "rxjs/operators";

export class CashingApi implements HttpInterceptor {
  private cashingResponses = new Map<string, HttpResponse<any>>();

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.cashingResponses.get(req.url)) {
      return of(this.cashingResponses.get(req.url));
    } else {
      return next.handle(req).pipe(
        tap((event) => {
          if (event.type === HttpEventType.Response) {
            this.cashingResponses.set(req.url, event);
          }
        })
      );
    }
  }
}
