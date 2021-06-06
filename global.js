function loadIn() {
    setTimeout(function () {
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("footer").style.opacity = "1";
    }, 2400);
}

function divSwap(div) {
    switch (div.id) {
        case 'linkBoka':
            // console.log(div);
            // console.log(div.id);
            // document.getElementById("wrapper").style.opacity ="1";
            // document.getElementById("bgSlideshow").add("divDisplay");
            document.getElementById("boka").classList.remove("divHide");
            document.getElementById("boka").classList.add("divDisplay");
            // setTimeout(function () {
            //     document.getElementById("boka").classList.remove("divDisplay");
            // }, 1000);
            document.getElementById("hittaOss").classList.add("divHide");
            document.getElementById("omOss").classList.add("divHide");
            document.getElementById("kontakt").classList.add("divHide");
            break;
        case 'linkHittaOss':
            document.getElementById("boka").classList.add("divHide");
            document.getElementById("omOss").classList.add("divHide");
            document.getElementById("kontakt").classList.add("divHide");

            document.getElementById("hittaOss").classList.remove("divHide");
            document.getElementById("hittaOss").classList.add("divDisplay");
            setTimeout(function () {
                document.getElementById("hittaOss").classList.remove("divDisplay");
            }, 1000);
            break;
        case 'linkOmOss':
            document.getElementById("omOss").classList.remove("divHide");
            document.getElementById("omOss").classList.add("divDisplay");
            setTimeout(function () {
                document.getElementById("omOss").classList.remove("divDisplay");
            }, 1000);

            document.getElementById("boka").classList.add("divHide");
            document.getElementById("hittaOss").classList.add("divHide");
            document.getElementById("kontakt").classList.add("divHide");
            break;
        case 'linkKontakt':
            document.getElementById("kontakt").classList.remove("divHide");
            document.getElementById("kontakt").classList.add("divDisplay");
            setTimeout(function () {
                document.getElementById("kontakt").classList.remove("divDisplay");
            }, 1000);

            document.getElementById("boka").classList.add("divHide");
            document.getElementById("hittaOss").classList.add("divHide");
            document.getElementById("omOss").classList.add("divHide");
            break;

        default:
            break;
    }
}
