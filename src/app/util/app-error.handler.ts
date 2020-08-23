import { Injectable, Injector, NgZone, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../components/message/message.service';
import { SharedService } from '../modules/global/services/shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

    constructor(
        private zone: NgZone,
        private injector: Injector) {
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        const router = this.injector.get(Router);
        const notificador = this.injector.get(MatSnackBar);
        const shared = SharedService.getInstance();
        if (errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.error ? errorResponse.error : undefined;
            this.zone.run(() => {
                switch (errorResponse.status) {
                    case 0:
                        notificador.open('O Servidor não respondeu. Verifique sua conexao: ' + JSON.parse(message), 'OK', {
                            duration: 10000
                        });
                        break;
                    case 401:
                        router.navigate(['/login']);
                        shared.logout();
                        notificador.open('Realize seu login novamente', 'OK', {
                            duration: 10000
                        });
                        break;
                    case 403:
                        notificador.open('Usuário não está autorizado a acessar este recurso.', 'OK', {
                            duration: 10000
                        });
                        break;
                    default:
                            notificador.open(message[0] || 'Erro interno por favor, tente novamente mais tarde!', 'OK', {
                                duration: 10000
                            });
                        break;
                }
            });
        }
        super.handleError(errorResponse);
    }

}
