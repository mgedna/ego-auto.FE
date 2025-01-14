import type { HttpInterceptorFn } from '@angular/common/http';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: 'Bearer your-token-here'
    }
  });

  return next(clonedRequest);
};
