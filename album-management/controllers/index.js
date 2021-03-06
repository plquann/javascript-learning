import { Album } from '../models/Album.js';
import { Gallery } from '../models/Gallery.js';

const gallery = new Gallery();
gallery.getGallery();
document.getElementById('btnUpdateAlbum').disabled = true;

document.getElementById('btnAddAlbum').onclick = () => {
    let album = new Album();

    const arrInput = document.querySelectorAll('input, select');
    for (let input of arrInput) {
        album[input.id] = input.value;
        input.value = "";
    }

    const isSuccess = gallery.addAlbum(album) || alert('The album already exists. Please choose another name.');
    gallery.saveGallery();
    renderAlbum(gallery.listAlbum);
}

const renderAlbum = (gallery) => {
    const contentGallery = gallery.reduce((content, item, index) => {
        return content += `
        <div class="col-md-4">
            <div class="card mb-4 box-shadow" >
                <div class="responsive-img"  style="background-image: url('${item.link}');">
                </div>
                <div class="card-body">
                    <h3>${item.name}</h3>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text">Type: ${item.type}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-success text-white btn-sm btn-outline-secondary mr-2" onclick="updateAlbum('${item.name}')">Update</button>
                            <button type="button" class="btn btn-danger text-white btn-sm btn-outline-secondary" onclick="deleteAlbum('${item.name}')">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }, ``);

    document.getElementById('gallery').innerHTML = contentGallery;
};
renderAlbum(gallery.listAlbum);

window.updateAlbum = (name) => {
    const index = gallery.checkIndexAlbum(name);
    let currentAlbum = gallery.listAlbum[index];

    const arrInput = document.querySelectorAll('input, select');
    for (let input of arrInput) {
        input.value = currentAlbum[input.id];
    }

    document.getElementById('form').scrollIntoView();
    document.getElementById('name').disabled = true;
    document.getElementById('btnUpdateAlbum').disabled = false;
    document.getElementById('btnAddAlbum').disabled = true;
}

window.deleteAlbum = (name) => {
    
    gallery.deleteAlbum(name);
    gallery.saveGallery();
    renderAlbum(gallery.listAlbum);
}

document.getElementById('btnUpdateAlbum').onclick = () => {
    let album = new Album();

    const arrInput = document.querySelectorAll('input, select');
    for (let input of arrInput) {
        album[input.id] = input.value;
        input.value = "";
    }
    gallery.updateAlbum(album.name, album)
    
    gallery.saveGallery();
    renderAlbum(gallery.listAlbum);
    document.getElementById('name').disabled = false;
    document.getElementById('btnAddAlbum').disabled = false;
    document.getElementById('btnUpdateAlbum').disabled = true;
}
