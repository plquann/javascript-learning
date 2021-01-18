export class Gallery {
    constructor() {
        this.listAlbum = [];
    }
    checkIndexAlbum(name) {
        return this.listAlbum.findIndex((item) => item.name === name);
    }
    addAlbum(album) {
        const index = this.checkIndexAlbum(album.name);

        return !~index ? this.listAlbum.push(album) : false;
    }
    deleteAlbum(name) {
        const index = this.checkIndexAlbum(name);
        this.listAlbum.splice(index, 1);
    }
    updateAlbum(name, album) {
        const index = this.checkIndexAlbum(name);
        this.listAlbum[index] = album
    }
    saveGallery() {
        localStorage.setItem('Gallery', JSON.stringify(this.listAlbum));
    }
    getGallery() {
        this.listAlbum = JSON.parse(localStorage.getItem('Gallery')) || [];
    }
};