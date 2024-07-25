function editProfile() {
    var newUsername = prompt("Digite o novo nome de usuário:");
    var newBio = prompt("Digite uma nova descrição:");
    var newAvatarURL = prompt("Digite a URL da nova imagem de perfil:");

    if (newUsername !== null && newBio !== null && newAvatarURL !== null) {
        // Atualiza o nome de usuário, descrição e imagem de perfil
        document.getElementById("username").innerText = newUsername;
        document.getElementById("bio").innerText = newBio;
        document.querySelector(".avatar").src = newAvatarURL;
    }
}
