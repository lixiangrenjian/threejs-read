
export default class Vector3 {

    constructor(x = 0, y = 0, z = 0) {

        this.x = x
        this.y = y
        this.z = z

    }

    set(x, y, z) {

        this.x = x
        this.y = y
        this.z = z

    }

    add(v1, v2) {

        this.x = v1.x + v2.x
        this.y = v1.y + v2.y
        this.z = v1.z + v2.z

    }

    addSelf(v) {

        this.x += v.x
        this.y += v.y
        this.z += v.z

    }

    addScalar(s) {

        this.x += s
        this.y += s
        this.z += s

    }

    sub(v1, v2) {

        this.x = v1.x - v2.x
        this.y = v1.y - v2.y
        this.z = v1.z - v2.z

    }

    subSelf(v) {

        this.x -= v.x
        this.y -= v.y
        this.z -= v.z

    }

    cross(v1, v2) {

        this.x = v1.y * v2.z - v1.z * v2.y
        this.y = v1.z * v2.x - v1.x * v2.z
        this.z = v1.x * v2.y - v1.y * v2.x

    }

    crossSelf(v) {

        let tx = this.x, ty = this.y, tz = this.z;

        this.x = ty * v.z - tz * v.y
        this.y = tz * v.x - tx * v.z
        this.z = tx * v.y - ty * v.x

    }

    multiplySelf(v) {

        this.x *= v.x
        this.y *= v.y
        this.z *= v.z

    }

    multiplyScalar(s) {

        this.x *= s
        this.y *= s
        this.z *= s

    }

    divideScalar(s) {

        this.x /= s
        this.y /= s
        this.z /= s

    }

    dot(v) {

        return this.x * v.x + this.y * v.y + this.z * v.z

    }

    distanceTo(v) {

        return Math.sqrt(this.distanceToSquared(v))

    }

    distanceToSquared(v) {

        let dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z
        return dx * dx + dy * dy + dz * dz;

    }

    length() {

        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)

    }

    lengthSq() {

        return this.x * this.x + this.y * this.y + this.z * this.z

    }

    negate() {

        this.x = - this.x
        this.y = - this.y
        this.z = - this.z

    }

    normalize() {

        if (this.length() > 0) {

            this.multiplyScalar(1 / this.length())

        } else {

            this.multiplyScalar(0)

        }

    }

    isZero() {

        const almostZero = 0.0001

        return (Math.abs(this.x) < almostZero) && (Math.abs(this.y) < almostZero) && (Math.abs(this.z) < almostZero)

    }

    clone() {

        return new Vector3(this.x, this.y, this.z)

    }

    toString() {

        return 'THREE.Vector3 ( ' + this.x + ', ' + this.y + ', ' + this.z + ' )'

    }
}