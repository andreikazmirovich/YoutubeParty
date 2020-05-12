import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'party-url-dialog',
  templateUrl: './url-dialog.component.html',
  styleUrls: ['./url-dialog.component.scss']
})
export class UrlDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UrlDialogComponent>
  ) { }

  public openVideo(url: string): void {
    const videoId = this.getEmbedVideoUrl(url);
    if (videoId) {
      this.dialogRef.close(videoId);
    }
  }

  private getEmbedVideoUrl(regularUrl: string): string {
    if (regularUrl) {
      let paramString = regularUrl.split('?')[1];
      
      if (paramString) {
        const videoId = new URLSearchParams(paramString).get('v');
        return videoId;
      }
    }

    return;
  }

}
