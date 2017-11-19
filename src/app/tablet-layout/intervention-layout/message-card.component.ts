import {Component} from '@angular/core';
import { slideToBottom } from '../../router.animations';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-message-card',
  templateUrl: 'message-card.component.html',
  styleUrls: ['message-card.component.scss'],
  animations: [slideToBottom()]
})
export class MessageCardComponent {}
