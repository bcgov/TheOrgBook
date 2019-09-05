
  export function clearChildNodes(elt: Node, fromIdx?: number) {
    if(! elt) return;
    for(var i = elt.childNodes.length-1; i >= (fromIdx || 0); i--) {
      elt.removeChild(elt.childNodes[i]);
    }
  }

  export function addElementContent(elt, content) {
    if(typeof content === 'string') {
      elt.appendChild(document.createTextNode(content));
    } else if(elt) {
      elt.appendChild(content);
    }
  }

  export function setElementContent(elt, content) {
    if(typeof content === 'string')
      elt.innerHTML = content;
    else if(Array.isArray(content)) {
      elt.innerHTML = '';
      for(let part of content) {
        addElementContent(elt, part);
      }
    }
  }

  export function parseDate(date: string | Date) {
    let result: Date = null;
    if(typeof date === 'string')
      result = new Date(date);
    else
      result = date;
    if(result && isNaN(result.getTime()))
      result = null;
    return result;
  }

  export function offsetDate(date: Date, offset: number) {
    let time = date.getTime() + (offset || 0);
    let d = new Date();
    d.setTime(time);
    return d;
  }
