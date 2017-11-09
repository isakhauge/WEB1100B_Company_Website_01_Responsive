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