import { NgModule } from '@angular/core';
export * from './core/index';
export * from './application/index';
export * from './application/model/index';
import { CORE_APIS } from './core/index';
import { APPLICATION_API } from './application/index';
import * as appModels from './application/model/index';

const APIS = [];
APIS.push(CORE_APIS, APPLICATION_API);

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [APIS]
})
export class ServiceModule { }
