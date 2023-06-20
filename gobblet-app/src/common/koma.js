// こまくらすを定義
export class Koma {
  constructor(props) {
    this.size = props.size;
    this.child = props.child || null;
  }
}

export const createTemochiKomaList = () => {
  return [
    new Koma({ size: "big", child: null }),
    new Koma({ size: "big", child: null }),
    new Koma({ size: "nomal", child: null }),
    new Koma({ size: "nomal", child: null }),
    new Koma({ size: "small", child: null }),
    new Koma({ size: "small", child: null }),
  ];
};
