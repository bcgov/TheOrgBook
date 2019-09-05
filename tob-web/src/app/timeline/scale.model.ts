export type scaleOpts = 1 | 2 | 3 | 4

export class Scale {

  constructor() {

  }
}

export function timelineScale(start: Date, end: Date) {

  const scale =  end.getFullYear() - start.getFullYear()
  console.log('scale')
  return scale < 10 ? 1 : 2;
}
