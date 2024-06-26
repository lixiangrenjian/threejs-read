import Face3 from "../core/Face3";
import Geometry from "../core/Geometry";
import UV from "../core/UV";
import Vector3 from "../core/Vector3";
import Vertex from "../core/Vertex";

export default class Sphere extends Geometry {

    constructor(radius, segments_width = 8, segments_height = 6) {

        super()

        const gridX = segments_width,
            gridY = segments_height

        const iHor = Math.max(3, gridX);
        const iVer = Math.max(2, gridY);
        const aVtc = [];

        for (let j = 0; j < (iVer + 1); j++) {

            let fRad1 = j / iVer;
            let fZ = radius * Math.cos(fRad1 * Math.PI);
            let fRds = radius * Math.sin(fRad1 * Math.PI);
            let aRow = [];
            let oVtx = 0;

            for (let i = 0; i < iHor; i++) {

                let fRad2 = 2 * i / iHor;
                let fX = fRds * Math.sin(fRad2 * Math.PI);
                let fY = fRds * Math.cos(fRad2 * Math.PI);

                if (!((j == 0 || j == iVer) && i > 0)) {

                    oVtx = this.vertices.push(new Vertex(new Vector3(fY, fZ, fX))) - 1;

                }

                aRow.push(oVtx);

            }

            aVtc.push(aRow);

        }

        let iVerNum = aVtc.length;

        for (let j = 0; j < iVerNum; j++) {

            let iHorNum = aVtc[j].length;

            if (j > 0) {

                for (let i = 0; i < iHorNum; i++) {

                    let bEnd = i == (iHorNum - 1);
                    let aP1 = aVtc[j][bEnd ? 0 : i + 1];
                    let aP2 = aVtc[j][(bEnd ? iHorNum - 1 : i)];
                    let aP3 = aVtc[j - 1][(bEnd ? iHorNum - 1 : i)];
                    let aP4 = aVtc[j - 1][bEnd ? 0 : i + 1];

                    let fJ0 = j / (iVerNum - 1);
                    let fJ1 = (j - 1) / (iVerNum - 1);
                    let fI0 = (i + 1) / iHorNum;
                    let fI1 = i / iHorNum;

                    let aP1uv = new UV(1 - fI0, fJ0);
                    let aP2uv = new UV(1 - fI1, fJ0);
                    let aP3uv = new UV(1 - fI1, fJ1);
                    let aP4uv = new UV(1 - fI0, fJ1);

                    //  aP1-----aP4
                    //   |       |
                    //   |       |
                    //  aP2-----aP3

                    if (j < (aVtc.length - 1)) {

                        this.faces.push(new Face3(aP1, aP2, aP3));
                        this.uvs.push([aP1uv, aP2uv, aP3uv]);

                    }

                    if (j > 1) {

                        this.faces.push(new Face3(aP1, aP3, aP4));
                        this.uvs.push([aP1uv, aP3uv, aP4uv]);

                    }

                }
            }
        }
    }
}