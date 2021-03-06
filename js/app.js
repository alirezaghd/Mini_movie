var movies;
var search_bar = document.getElementById("searchBar")
var main = document.getElementById("main");



function searchbar(select_input) {
    var search_bar = document.getElementById("searchBar")
    main.innerHTML = " "

    var search = search_bar.value.toLowerCase();

    for (var i = 0; i < movies.length; i++) {

        if (movies[i].title.toLowerCase().slice(0, search.length) == select_input.value) {
            var col = document.createElement("DIV");
            col.className = "col-lg-4 col-md-6 col-sm-12  mt-2 mt-sm-2 mt-md-2 mt-lg-2 mb-2 mb-sm-2 mb-md-2 mb-lg-2";
            var div = document.createElement("DIV");
            div.className = "card border-dark   h-auto h-sm-50 h-md-75 h-lg-100";

            var img = document.createElement("IMG");
            img.className = "card-img-top img-fluid "
            var new_onclick = document.createAttribute("onclick");
            new_onclick.value = "Change_color(this)";
            img.setAttributeNode(new_onclick);

            var tag_h_title = document.createElement("H5");
            tag_h_title.className = "card-header bg-dark text-white mt-1 border-dark p-2"

            var tag_h6_year = document.createElement("H6");
            tag_h6_year.className = "card-subtitle  text-muted p-2"

            var tag_p_Actors = document.createElement("P");
            tag_p_Actors.className = "card-text p-2 mb-0"

            var tag_p_rating = document.createElement("P");
            tag_p_rating.className = "card-text p-2"

            img.src = movies[i].info.image_url;
            img.className = "fluid card-img-top";
            tag_h_title.innerHTML = movies[i].title;
            tag_h6_year.innerHTML = "year :" + " " + movies[i].year;
            tag_p_Actors.innerHTML = "<b>Actors</b> :" + "<br>" + movies[i].info.actors;
            tag_p_rating.innerHTML = "<b>Rating</b> :" + " " + movies[i].info.rating;
            main.appendChild(col);
            col.appendChild(div);
            div.appendChild(img);
            div.appendChild(tag_h_title);
            div.appendChild(tag_h6_year);
            div.appendChild(tag_p_Actors);
            div.appendChild(tag_p_rating);

        }

    }

}



function set_year() {
    var year_tag = document.getElementById("select-year")
    arr_years = []
    for (var i = 0; i < movies.length; i++) {
        arr_years[i] = movies[i].year;
    }

    var uniqueSet = new Set(arr_years);
    var backToArray = [...uniqueSet];
    backToArray.sort();

    for (var j = 0; j < backToArray.length; j++) {
        var option = document.createElement("OPTION");
        option.innerHTML = backToArray[j];
        option.value = backToArray[j];
        year_tag.appendChild(option);

    }

}



function show() {
    for (var i = 0; i < 30; i++) {
        var col = document.createElement("DIV");
        col.className = "col-lg-4 col-md-6 col-sm-12  mt-2 mt-sm-2 mt-md-2 mt-lg-2 mb-2 mb-sm-2 mb-md-2 mb-lg-2";
        var div = document.createElement("DIV");
        div.className = "card border-dark   h-auto h-sm-50 h-md-75 h-lg-100";

        var img = document.createElement("IMG");
        img.className = "card-img-top img-fluid "

        var new_onclick = document.createAttribute("onclick");
        new_onclick.value = "Change_color(this)";
        img.setAttributeNode(new_onclick);


        var tag_h_title = document.createElement("H5");
        tag_h_title.className = "card-header bg-dark text-white mt-1 border-dark p-2"

        var tag_h6_year = document.createElement("H6");
        tag_h6_year.className = "card-subtitle  text-muted p-2"

        var tag_p_Actors = document.createElement("P");
        tag_p_Actors.className = "card-text p-2 mb-0"

        var tag_p_rating = document.createElement("P");
        tag_p_rating.className = "card-text p-2"

        img.src = movies[i].info.image_url;
        img.className = "fluid card-img-top";
        tag_h_title.innerHTML = movies[i].title;
        tag_h6_year.innerHTML = "year :" + " " + movies[i].year;
        tag_p_Actors.innerHTML = "<b>Actors</b> :" + "<br>" + movies[i].info.actors;
        tag_p_rating.innerHTML = "<b>Rating</b> :" + " " + movies[i].info.rating;
        main.appendChild(col);
        col.appendChild(div);
        div.appendChild(img);
        div.appendChild(tag_h_title);
        div.appendChild(tag_h6_year);
        div.appendChild(tag_p_Actors);
        div.appendChild(tag_p_rating);


    }
}

function display_movie(selected_year) {

    main.innerHTML = " "

    for (var i = 0; i < movies.length; i++) {
        if (movies[i].year == selected_year.value) {
            var col = document.createElement("DIV");
            col.className = "col-lg-4 col-md-6 col-sm-12  mt-2 mt-sm-2 mt-md-2 mt-lg-2 mb-2 mb-sm-2 mb-md-2 mb-lg-2";
            var div = document.createElement("DIV");
            div.className = "card border-dark   h-auto h-sm-50 h-md-75 h-lg-100";

            var img = document.createElement("IMG");
            img.className = "card-img-top img-fluid "
            var new_onclick = document.createAttribute("onclick");
            new_onclick.value = "Change_color(this)";
            img.setAttributeNode(new_onclick);

            var tag_h_title = document.createElement("H5");
            tag_h_title.className = "card-header bg-dark text-white mt-1 border-dark p-2"

            var tag_h6_year = document.createElement("H6");
            tag_h6_year.className = "card-subtitle  text-muted p-2"

            var tag_p_Actors = document.createElement("P");
            tag_p_Actors.className = "card-text p-2 mb-0"

            var tag_p_rating = document.createElement("P");
            tag_p_rating.className = "card-text p-2"

            img.src = movies[i].info.image_url;
            img.className = "fluid card-img-top";
            tag_h_title.innerHTML = movies[i].title;
            tag_h6_year.innerHTML = "year :" + " " + movies[i].year;
            tag_p_Actors.innerHTML = "<b>Actors</b> :" + "<br>" + movies[i].info.actors;
            tag_p_rating.innerHTML = "<b>Rating</b> :" + " " + movies[i].info.rating;
            main.appendChild(col);
            col.appendChild(div);
            div.appendChild(img);
            div.appendChild(tag_h_title);
            div.appendChild(tag_h6_year);
            div.appendChild(tag_p_Actors);
            div.appendChild(tag_p_rating);

        }

    }
}


async function read_data(file) {
    let x = await fetch(file);
    let y = await x.text();
    movies = JSON.parse(y);
    console.log(movies);
    set_year()
    show()
}

function Change_color(click){
    click.style.filter = "grayscale(0%)";
    click.style.transition = "5s"
}
read_data("https://raw.githubusercontent.com/alirezaghd/Mini_movie/main/moviedata.json");

