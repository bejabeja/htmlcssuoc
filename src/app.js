const name = "world2";
let citySet = '';
function getDataCairns(){
    document.getElementById("detail-page__km").innerHTML = "1800 km";
    document.getElementById("detail-page__time-on-road").innerHTML = "20 h";
    document.getElementById("detail-page__city-title").innerHTML = "CAIRNS";
    document.getElementById("detail-page__city-description").innerHTML = "La ciudad recibe su nombre de William Wellington Cairns, antiguo gobernador de Queensland y fundador de la ciudad. Se formó para servir a los mineros que iban en dirección a la mina de oro del río Hodgkinson, pero experimentó un retroceso en su desarrollo por el descubrimiento de una ruta más fácil por Port Douglas. <p> <br> Más tarde se convirtió en un puerto importante para la exportación de caña de azúcar, oro, metales, minerales y productos agrícolas de los alrededores y las zonas costeras de la región de la meseta Atherton. </p>";
    document.getElementById("detail-page__whattodo-par-one").innerHTML = "Ha sido un viaje divertido lleno de personajes divertidos, corazones acelerados e historias que se contarán en las próximas décadas. Cada día es tan emocionante como el día que comenzamos. Y no hay nada en lo que prefiramos gastar nuestro tiempo. ";
}

function getDataWhitesundays(){
    document.getElementById("detail-page__km").innerHTML = "1175 km";
    document.getElementById("detail-page__time-on-road").innerHTML = "13 h";
    document.getElementById("detail-page__city-title").innerHTML = "WHITESUNDAY ISLAND";
    document.getElementById("detail-page__city-description").innerHTML = "Las islas Whitsundays son unas 70 islas ubicadas en la Gran Barrera de Coral, se pueden observar los corales, aves migratorias, ballenas (entre mayo y septiembre), además de disfrutar hermosas bahías y playas, como la Whitehaven Beach, de arena blanca y aguas cristalinas Algunas de las islas poseen un denso bosque seco tropical que puede ser explorado. Se trata de los picos de una cadena montañosa que fue separada del continente hace unos 10 000 años debido al aumento en el nivel de las aguas. <p> La región fue antiguamente habitada por el pueblo aborigen Ngaro. cuyas raíces en la zona se pueden seguir hasta por lo menos 8.000 años.</p> <br> <p>Las islas que conforman el parque nacional son Arkhurst, Bird, Black, Border, Buddibuddi, ,rkington, Yerumbinna ,las Islas Yiundalla y la isla Luciipeerez. </p> <br> <p>El Parque Nacional Islas Whitsunday forma parte de la Gran Barrera de Coral, Patrimonio de la Humanidad en Australia según la Unesco.</p>";
    document.getElementById("detail-page__whattodo-par-one").innerHTML = "Ha sido un viaje divertido lleno de personajes divertidos, corazones acelerados e historias que se contarán en las próximas décadas. Cada día es tan emocionante como el día que comenzamos. Y no hay nada en lo que prefiramos gastar nuestro tiempo. ";    
}

function getDataFraserIsland(){
    document.getElementById("detail-page__km").innerHTML = "362 km";
    document.getElementById("detail-page__time-on-road").innerHTML = "4 h";
    document.getElementById("detail-page__city-title").innerHTML = "FRASER ISLAND";
    document.getElementById("detail-page__city-description").innerHTML = "La isla Fraser, K'Gari en el idioma batjala, es la isla de arena más grande del mundo con 1630 km². Fue inscrita como Patrimonio de la Humanidad por la Unesco en el año 1992. Está bajo la administración tanto de la ciudad de Maryborough como de la ciudad de Hervey Bay City Council. ";
    document.getElementById("detail-page__whattodo-par-one").innerHTML = "Ha sido un viaje divertido lleno de personajes divertidos, corazones acelerados e historias que se contarán en las próximas décadas. Cada día es tan emocionante como el día que comenzamos. Y no hay nada en lo que prefiramos gastar nuestro tiempo. ";
}

function setCity(city){
    localStorage.clear();
    localStorage.setItem('city', city);
}

function getCity(){
    if(localStorage.getItem('city') === 'Cairns'){
        return getDataCairns();
    }
    if(localStorage.getItem('city') === 'Whitesundays'){
        return getDataWhitesundays;
    }
    if(localStorage.getItem('city') === 'FraserIsland'){
        return getDataFraserIsland;
    }
}

function getImage(img){
    if(localStorage.getItem('city') === 'Cairns'){
        img.src = "https://media.istockphoto.com/photos/great-barrier-reef-queensland-australia-picture-id520889933?b=1&k=20&m=520889933&s=170667a&w=0&h=iI_KmETneHNgKVT1mDtIgIPpZs-P6pYaibf-KLaDax4=";
        img.alt = "La playa de Cairns";
        return img;
    }
    if(localStorage.getItem('city') === 'Whitesundays'){
        img.src = "https://media.istockphoto.com/photos/whitsunday-islands-great-barrier-reef-queensland-australia-picture-id908189050?b=1&k=20&m=908189050&s=170667a&w=0&h=-BwdPRlvs0pcNyx2bWegoaZ39Ar58TycmrpVfcNmMx8=";
        img.alt = "La playa de Whitesundays";
        return img;
    }
    if(localStorage.getItem('city') === 'FraserIsland'){
        img.src = "https://media.istockphoto.com/photos/dingo-on-fraser-island-beach-picture-id172453846?b=1&k=20&m=172453846&s=170667a&w=0&h=fAhQqa4V02RVxVm9tv3GkL14Ey91dV3GLpq5u94ndNk=";
        img.alt = "Dingoo en una playa de Fraser Island";
        return img;
    }
}
