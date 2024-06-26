import Color from "./Color";
import Vector3 from "./Vector3";

export default class Face3 {

    constructor(a, b, c, normal = new Vector3(), color = new Color(0xff000000)) {

        this.a = a
        this.b = b
        this.c = c

        this.normal = normal
        this.screen = new Vector3()

        this.color = color
    }

    toString() {
        return 'THREE.Face3 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )'
    }
}