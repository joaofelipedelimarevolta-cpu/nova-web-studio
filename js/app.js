// Login demonstrativo e funções das páginas.
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('loginMessage');

    if (!email || senha.length < 4) {
      mensagem.textContent = 'Preencha os campos corretamente.';
      return;
    }

    // Guarda o e-mail apenas para demonstrar a navegação entre páginas.
    localStorage.setItem('novawebEmail', email);
    window.location.href = 'perfil.html';
  });
}

const emailSalvo = localStorage.getItem('novawebEmail');
const nomeUsuario = emailSalvo ? emailSalvo.split('@')[0].replace(/[._-]/g, ' ') : 'Usuário NovaWeb';

const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const welcomeName = document.getElementById('welcomeName');

if (profileName) profileName.textContent = nomeUsuario.replace(/\b\w/g, letra => letra.toUpperCase());
if (profileEmail) profileEmail.textContent = emailSalvo || 'usuario@exemplo.com';
if (welcomeName) welcomeName.textContent = 'Olá, ' + (nomeUsuario.split(' ')[0] || 'usuário') + '!';

document.querySelectorAll('[data-logout]').forEach(function (botao) {
  botao.addEventListener('click', function () {
    localStorage.removeItem('novawebEmail');
    window.location.href = 'index.html';
  });
});

const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function () {
    const termo = searchInput.value.toLowerCase();
    const linhas = document.querySelectorAll('#usersTable tr');
    let encontrados = 0;

    linhas.forEach(function (linha) {
      const corresponde = linha.textContent.toLowerCase().includes(termo);
      linha.hidden = !corresponde;
      if (corresponde) encontrados++;
    });

    document.getElementById('resultCount').textContent = encontrados + (encontrados === 1 ? ' registro' : ' registros');
    document.getElementById('emptyMessage').hidden = encontrados !== 0;
  });
}
