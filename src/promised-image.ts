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

export function PromisedImage(this: HTMLPromisedImageElement, width: number | string, height: number | string) {
  if (!(this instanceof HTMLPromisedImageElement)) {
    // tslint:disable-next-line:max-line-length
    throw new TypeError(`Failed to construct 'PromisedImage': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`);
  }
  const image = document.createElement('img', {
    is: 'promised-image',
  });
  image.setAttribute('is', 'promised-image');
  if (width) {
    image.setAttribute('width', `${width}`);
  }
  if (height) {
    image.setAttribute('height', `${height}`);
  }
  return image;
}
