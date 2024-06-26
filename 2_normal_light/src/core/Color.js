
export default class Color {

    __styleString = 'rgba(0, 0, 0, 1)'

    constructor(hex) {
        this.setHex(hex)
    }

    setHex(hex) {
        this.hex = hex
        this.updateRGBA()
    }

    setRGBA(r, g, b, a) {

        this.r = r
        this.g = g
        this.b = b
        this.a = a

        this.updateHex()
        this.updateStyleString()
    }

    updateHex() {
        this.hex = Math.floor(this.a * 255) << 24
            | Math.floor(this.r * 255) << 16
            | Math.floor(this.g * 255) << 8 | Math.floor(this.b * 255)
    }

    updateRGBA() {
        this.a = (this.hex >> 24 & 0xff) / 0xff
        this.r = (this.hex >> 16 & 0xff) / 0xff
        this.g = (this.hex >> 8 & 0xff) / 0xff
        this.b = (this.hex & 0xff) / 0xff
    }

    updateStyleString() {
        this.__styleString = 'rgba('
            + Math.floor(this.r * 255) + ','
            + Math.floor(this.g * 255) + ','
            + Math.floor(this.b * 255) + ',' + this.a + ')'
    }

    toString() {
        return 'THREE ( r: ' + this.r + ', g: ' + this.g + ', b: ' + this.b + ', a: ' + this.a + ', hex: ' + this.hex + ' )'
    }
} 