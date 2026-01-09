export class Gallery{

    imageId: number;
    image: Uint8Array;

    //imageId?: number;
    //image?: Uint8Array; // Store the binary data

    constructor() {
        this.imageId = 0;
        this.image = new Uint8Array();
    }
}
