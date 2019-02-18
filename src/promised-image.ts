export class HTMLPromisedImageElement extends HTMLImageElement {
  public get loaded(): Promise<this> {
    return new Promise((resolve, reject) => {
      this.addEventListener('load', () => resolve(this));
      this.addEventListener('error', reject);
    });
  }

  public load = (src: string) => {
    this.src = src;
    return this.loaded;
  }
}

customElements.define('promised-image', HTMLPromisedImageElement, { extends: 'img' });
