
export default class Scene {

    objects = []

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

    add(object) {

        this.addObject( object );

    }

    toString() {
        return 'THREE.Scene ( ' + this.objects + ' )'
    }
}