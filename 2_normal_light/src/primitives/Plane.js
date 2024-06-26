import Face4 from "../core/Face4";
import Geometry from "../core/Geometry";
import UV from "../core/UV";
import Vector3 from "../core/Vector3";
import Vertex from "../core/Vertex";


export default class Plane extends Geometry {

    constructor(width, height, segments_width = 1, segments_height = 1) {
        super()

        const
            width_half = width / 2,
            height_half = height / 2,
            gridX = segments_width,
            gridY = segments_height,
            gridX1 = gridX + 1,
            gridY1 = gridY + 1,
            segment_width = width / gridX,
            segment_height = height / gridY;

        //  0------3
        //  |      |
        //  |      |
        //  1------2

        for (let iy = 0; iy < gridY1; iy++) {

            for (let ix = 0; ix < gridX1; ix++) {

                const x = ix * segment_width - width_half;
                const y = iy * segment_height - height_half;

                this.vertices.push(new Vertex(new Vector3(x, - y, 0)));

            }

        }

        // face 0, 2, 3, 1
        // uv (0, 0) (0, 1), (1, 1), (1, 0)

        for (let iy = 0; iy < gridY; iy++) {

            for (let ix = 0; ix < gridX; ix++) {

                const a = ix + gridX1 * iy;
                const b = ix + gridX1 * (iy + 1);
                const c = (ix + 1) + gridX1 * (iy + 1);
                const d = (ix + 1) + gridX1 * iy;

                this.faces.push(new Face4(a, b, c, d));
                this.uvs.push([
                    new UV(ix / gridX, iy / gridY),
                    new UV(ix / gridX, (iy + 1) / gridY),
                    new UV((ix + 1) / gridX, (iy + 1) / gridY),
                    new UV((ix + 1) / gridX, iy / gridY)
                ]);

            }

        }

        this.computeNormals();
    }
}