import Vector3 from "./Vector3";

export default class Vertex {

    // __visible = true

    constructor(position = new Vector3(), normal = new Vector3()) {

        this.position = position
        this.normal = normal
        this.screen = new Vector3()

    }

    toString() {
        return 'THREE.Vertex ( position: ' + this.position + ', normal: ' + this.normal + ' )'
    }
}