import Vector3 from "../core/Vector3"
import Light from "./Light"

export default class DirectionalLight extends Light {

    constructor(color, intensity = 1) {

        super(color)

        this.position = new Vector3(0, 1, 0)
        this.intensity = intensity

    }
}