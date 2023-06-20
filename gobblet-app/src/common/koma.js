// こまくらすを定義
export class Koma {
  constructor(props) {
    this.size = props.size;
    this.child = props.child || null;
    this.color = props.color;
    this.place = props.place;
  }
}

export const createTemochiKomaList = (color) => {
  return [
    new Koma({ size: "big", color: color, place: "temochi" }),
    new Koma({ size: "big", color: color, place: "temochi" }),
    new Koma({ size: "nomal", color: color, place: "temochi" }),
    new Koma({ size: "nomal", color: color, place: "temochi" }),
    new Koma({ size: "small", color: color, place: "temochi" }),
    new Koma({ size: "small", color: color, place: "temochi" }),
  ];
};
