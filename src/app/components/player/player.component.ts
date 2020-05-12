import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';

import { UrlDialogComponent } from '../url-dialog/url-dialog.component';

@Component({
  selector: 'party-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public videoId: string;

  private youtubeBaseUrl: string = 'https://www.youtube.com/embed/';

  constructor(
    private dialog: MatDialog,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.openUrlDialog();
  }

  public getVideoId(): SafeResourceUrl {
    const url = this.youtubeBaseUrl + this.videoId;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  /**
   * Open Url Dialog
   */
  private openUrlDialog(): void {
    const urlDialog = this.dialog.open(UrlDialogComponent, {
      width: '300px'
    });

    urlDialog.afterClosed().subscribe(videoId => {
      this.videoId = videoId;
    });
  }

}
