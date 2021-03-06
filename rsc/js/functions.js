/*
#################################################################################
### INFOBOX: START
#################################################################################
*/

function infobox(icon_name, title, text) {

    a = icon_name;
    b = title;
    c = text;

    output = document.write(
        '<ikea-infobox>' +
            '<ikea-infobox-icon data-material-icons>' + a + '</ikea-infobox-icon>' +
            '<ikea-infobox-title>' + b + '</ikea-infobox-title>' +
            '<ikea-infobox-text>' + c + '</ikea-infobox-text>' +
        '</ikea-infobox>'
    );

    return output;
}

/*
#################################################################################
### INFOBOX: SLUTT
#################################################################################
*/




/*
=======================================
*/




/*
#################################################################################
### IKEA LOGO: START
#################################################################################
*/

function ikea_logo () {
    location.href = 'index.html';
}

/*
#################################################################################
### IKEA LOGO: SLUTT
#################################################################################
*/




/*
=======================================
*/




/*
#################################################################################
### IKEA MENU BUTTON: START
#################################################################################
*/

    function menu() {

        var ikea_nav_button;
        var data_nav_header;

        ikea_nav_button = document.getElementsByTagName('ikea-nav-button');
        data_nav_header = document.querySelector("[data-nav-header]");

        if (data_nav_header.classList.contains("menu_close") === true) {

            data_nav_header.classList.remove("menu_close");
            data_nav_header.classList.add("menu_open");

        }

        else {

            data_nav_header.classList.remove("menu_open");
            data_nav_header.classList.add("menu_close");

        }

    }

/*
#################################################################################
### IKEA MENU BUTTON: SLUTT
#################################################################################
*/




/*
=======================================
*/




/*
#################################################################################
### IKEA SCROLL DOWN: START
#################################################################################
*/

function scroll_down(location_id) {
    location.href = location_id;
}

/*
#################################################################################
### IKEA SCROLL DOWN: SLUTT
#################################################################################
*/