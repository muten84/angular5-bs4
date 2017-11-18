export * from './time.service';
import { TimeService } from './time.service';
export * from './localbus.service';
import { LocalBusService } from './localbus.service';
export const CORE_APIS = [TimeService, LocalBusService];
