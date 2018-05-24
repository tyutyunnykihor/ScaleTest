// Get the modal
var modal = document.getElementById('modal-wrapper');
// Get the modal image container
var imgContainer = modal.getElementsByClassName('modal-img-container')[0];
// Get the modal image
var imgModal = imgContainer.getElementsByClassName('modal-img')[0];
// Get the modal title
var titleModal = modal.getElementsByClassName('modal-title')[0];

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

var imageCollection = {
    0 : {
        src : "/img/nz/nz@x1.jpg",
        srcset: "/img/nz/nz@x1.jpg 1x, /img/nz/nz@x2.jpg 2x, /img/nz/nz@x3.jpg 3x",
        title: "abdsjakdhbasd"
    },
    1 : {
        src : "/img/nz2/nz@x1.jpg 1x, ",
        srcset: "/img/nz2/nz@x1.jpg 1x, /img/nz2/nz@x2.jpg 2x, /img/nz2/nz@x3.jpg 3x",
        title: "abdsjakdhbasd2"

    },
    2 : {
        src : "/img/nz3/nz@x1.jpg 1x,",
        srcset: "/img/nz3/nz@x1.jpg 1x, /img/nz3/nz@x2.jpg 2x, /img/nz3/nz@x3.jpg 3x",
        title: "abdsjakdhbasd3"

    },
    3 : {
        src : "/img/nz 4/nz@x1.jpg 1x,",
        srcset: "/img/nz4/nz@x1.jpg 1x, /img/nz4/nz@x2.jpg 2x, /img/nz4/nz@x3.jpg 3x",
        title: "abdsjakdhbasd4"
    }
};

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function openModal(event) {
    modal.style.display = "block";
    var target = event.target;
    var numb =  target.getAttribute("data-image");
    switch(numb) {
        case '0':
            imgModal.setAttribute('src', imageCollection[0].src);
            imgModal.setAttribute('srcset', imageCollection[0].srcset);
            titleModal.innerHTML =  imageCollection[0].title;
        break;
        case '1':
            imgModal.setAttribute('src', imageCollection[1].src);
            imgModal.setAttribute('srcset', imageCollection[1].srcset);
            titleModal.innerHTML =  imageCollection[1].title;
        break;
        case '2':
            imgModal.setAttribute('src', imageCollection[2].src);
            imgModal.setAttribute('srcset', imageCollection[2].srcset);
            titleModal.innerHTML =  imageCollection[2].title;
        break;
        case '3':
            imgModal.setAttribute('src', imageCollection[3].src);
            imgModal.setAttribute('srcset', imageCollection[3].srcset);
            titleModal.innerHTML =  imageCollection[3].title;
        break;
    }
}
