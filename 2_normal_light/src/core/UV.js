
export default class UV {

    constructor(u = 0, v = 0) {

        this.u = u
        this.v = v

    }

    copy(uv) {
        this.u = uv.u
        this.v = uv.v
    }

    toString() {
        return 'THREE.UV (' + this.u + ', ' + this.v + ')'
    }
}