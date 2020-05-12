import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Message } from './models/message.model';

@Component({
  selector: 'party-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatBody') public chat: ElementRef;

  public messages: Message[] = [];
  public chatMessage: string;
  public noMessageText: string = 'Messages will be here';

  private username: string;
  
  public ngOnInit(): void {
    this.username = 'Andrii';
  }

  public ngAfterViewChecked(): void {
    this.scrollDown();
  }
  
  public isMessageFromAnotherUser(message: Message): boolean {
    return this.username !== message.user;
  }

  public isPreviouseMessageFromTheSameUse(messageIndex: number): boolean {
    if (messageIndex !== 0) {
    return this.messages[messageIndex].user === this.messages[messageIndex - 1].user;
    }

    return false;
  }

  public sendMessage(): void {
    const newMessage: Message = {
      user: this.username,
      text: this.chatMessage
    };
    this.messages.push(newMessage);
    this.scrollDown();
    this.chatMessage = '';
  }

  public scrollDown(): void {
    if (this.chat) {
      const parent = this.chat.nativeElement.parentElement;
      parent.scrollTop = parent.scrollHeight;
    }
  }
}
