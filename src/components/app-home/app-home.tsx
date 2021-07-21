import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @State() text = `blah \n blah blah \n `;

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire apps with web components using Stencil and ionic/core! Check out the README for everything that comes
          in this starter out of the box and check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        <ion-item>
          <ion-textarea id="first-input" autoGrow={true} value={`asdfkamdsfk \n \n adsfsdf`} autoCapitalize="true" autoCorrect="true"></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-textarea id="second-input" autoGrow={true} autoCapitalize="true" autoCorrect="true">{`asdfkamdsfk \n \n adsfsdf`}</ion-textarea>
        </ion-item>
        <ion-item>
          <ion-textarea id="third-input" autoGrow={true} autoCapitalize="true" autoCorrect="true" onInput={(ev: any) => (this.text = ev.target.value)}>
            {this.text}
          </ion-textarea>
        </ion-item>
        <ion-button href="/profile/ionic" expand="block">
          Profile page
        </ion-button>
      </ion-content>,
    ];
  }
}
