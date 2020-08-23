import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'safeurl'
})
export class SafeUrlPipe implements PipeTransform {

    constructor(private sanitized: DomSanitizer) { }

    transform(value: any, args?: any): any {
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
    }
}
