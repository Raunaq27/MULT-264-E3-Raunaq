let htmlText = document.getElementById("pog").innerHTML

for (i = 0; i < 5; i++) {
    document.getElementById("pog").innerHTML += `<p>${i + 1}</p>`
}