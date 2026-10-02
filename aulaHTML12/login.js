```javascript
const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("mensagem");

    if (email === "" && senha === "") {
        mensagem.textContent = "Preencha o e-mail e a senha.";
        mensagem.style.color = "red";
        return;
    }

    if (email === "") {
        mensagem.textContent = "Digite seu e-mail.";
        mensagem.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        mensagem.textContent = "Digite um e-mail válido.";
        mensagem.style.color = "red";
        return;
    }

    if (senha === "") {
        mensagem.textContent = "Digite sua senha.";
        mensagem.style.color = "red";
        return;
    }

    if (senha.length < 6) {
        mensagem.textContent = "A senha deve possuir pelo menos 6 caracteres.";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.style.color = "green";

});
```
