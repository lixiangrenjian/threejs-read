
export default class Vector2 {

    constructor(x = 0, y = 0) {

        this.x = x
        this.y = y

    }

    set(x, y) {

        this.x = x
        this.y = y

    }

    copy(v) {

        this.x = v.x
        this.y = v.y

    }

    addSelf(v) {

        this.x += v.x
        this.y += v.y

    }

    add(v1, v2) {

        this.x = v1.x + v2.x
        this.y = v1.y + v2.y

    }

    subSelf(v) {

        this.x -= v.x
        this.y -= v.y

    }

    sub(v1, v2) {

        this.x = v1.x - v2.x
        this.y = v1.y - v2.y

    }

    multiplyScalar(s) {

        this.x *= s
        this.y *= s

    }

    unit() {

        this.multiplyScalar(1 / this.length())

    }

    length() {

        return Math.sqrt(this.x * this.x + this.y * this.y)

    }

    lengthSq() {

        return this.x * this.x + this.y * this.y

    }

    negate() {

        this.x = - this.x
        this.y = - this.y

    }

    clone() {

        return new Vector2(this.x, this.y)

    }

    toString() {
        return 'THREE.Vector2 (' + this.x + ', ' + this.y + ')'
    }
}