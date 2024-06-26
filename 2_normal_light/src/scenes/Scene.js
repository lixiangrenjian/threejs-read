
export default class Scene {

    objects = []
    lights = []

    constructor() {

    }

    addObject(object) {

        this.objects.push(object)

    }

    removeObject(object) {
        
        this.objects.map((item, i) => {

            if (object == item) {
                this.objects.splice( i, 1 )
            }

        })
    }

    addLight(light) {
        this.lights.push(light);
    }

    removeLight(light) {
        this.lights.forEach((l, index) => {
            if (light == l) {
                this.lights.splice(index, 1);
            }
        })
    }

    add(object) {

        this.addObject( object );

    }

    toString() {
        return 'THREE.Scene ( ' + this.objects + ' )'
    }
}