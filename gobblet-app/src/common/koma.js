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
    new Koma({ size: "3", color: color, place: "temochi" }),
    new Koma({ size: "3", color: color, place: "temochi" }),
    new Koma({ size: "2", color: color, place: "temochi" }),
    new Koma({ size: "2", color: color, place: "temochi" }),
    new Koma({ size: "1", color: color, place: "temochi" }),
    new Koma({ size: "1", color: color, place: "temochi" }),
  ];
};
