import { Marker } from "./marker.model";
import { Renderer2 } from "@angular/core";
import { MarkerSpec } from "./i-timeline";

export class ShortDateMarker extends Marker {

  constructor(spec: MarkerSpec) {
    super(spec)
  }

  render(renderer: Renderer2) {
    this._renderer = renderer;

    if (! this._elt) {
      this._elt = renderer.createElement('div');
      renderer.addClass(this._elt, 'timeline-marker');
      if (this.classNames) {
        for (const c of this.classNames) {
          renderer.addClass(this._elt, c);
        }
      }
      if (this.label) {
        this._labelElt = renderer.createElement('a');
        this._labelElt.appendChild(document.createTextNode(this.label));
        this._elt.appendChild(this._labelElt);
      }
    }
    console.log('element', this._elt)
    return this._elt;
  }
}
