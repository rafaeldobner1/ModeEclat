document.getElementById("shop-now").addEventListener("click", function() {
    alert("Redirecionando para a seção de produtos!");
    window.location.href = "#produtos";
});

function toggleFavorite(element) {
    element.classList.toggle('favorited');
}

