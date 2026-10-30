// ====================================
// LOGIN DO SISTEMA
// ====================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();

        const senha = document.getElementById("senha").value;

        const mensagem = document.getElementById("loginMessage");

        if (!email || senha.length < 4) {

            mensagem.textContent = "Preencha os campos corretamente.";

            return;

        }

        // Salva o e-mail do usuário
        localStorage.setItem("novawebEmail", email);

        // Vai para a página de perfil
        window.location.href = "perfil.html";

    });

}


// ====================================
// MOSTRAR DADOS DO USUÁRIO
// ====================================

const emailSalvo = localStorage.getItem("novawebEmail");

const nomeUsuario = emailSalvo
    ? emailSalvo.split("@")[0].replace(/[._-]/g, " ")
    : "Usuário NovaWeb";

const profileName = document.getElementById("profileName");

const profileEmail = document.getElementById("profileEmail");

const welcomeName = document.getElementById("welcomeName");

if (profileName) {

    profileName.textContent = nomeUsuario.replace(/\b\w/g, letra => letra.toUpperCase());

}

if (profileEmail) {

    profileEmail.textContent = emailSalvo || "usuario@exemplo.com";

}

if (welcomeName) {

    welcomeName.textContent = "Olá, " + nomeUsuario.split(" ")[0] + "!";

}


// ====================================
// BOTÃO SAIR
// ====================================

document.querySelectorAll("[data-logout]").forEach(function(botao) {

    botao.addEventListener("click", function() {

        localStorage.removeItem("novawebEmail");

        window.location.href = "index.html";

    });

});


// ====================================
// PESQUISA NA TABELA
// ====================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function() {

        const termo = searchInput.value.toLowerCase();

        const linhas = document.querySelectorAll("#usersTable tr");

        let encontrados = 0;

        linhas.forEach(function(linha) {

            const corresponde = linha.textContent.toLowerCase().includes(termo);

            linha.hidden = !corresponde;

            if (corresponde) {

                encontrados++;

            }

        });

        // Atualiza quantidade de registros
        document.getElementById("resultCount").textContent =
            encontrados + (encontrados === 1 ? " registro" : " registros");

        // Mostra mensagem se não encontrar
        document.getElementById("emptyMessage").hidden = encontrados !== 0;

    });

}