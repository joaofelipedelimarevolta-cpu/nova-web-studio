# Projeto Nova-Web - Especificações de UI/UX (Tela de Login)

## 1. Conceitos de Usabilidade em Formulários

### Labels vs. Placeholders

A **label** identifica de forma permanente qual informação deve ser preenchida no campo. Por exemplo, podemos utilizar a label **"E-mail"** acima do campo.

O **placeholder** serve apenas como uma dica ou exemplo do formato esperado. Ele não deve substituir a label porque desaparece quando o usuário começa a digitar.

No projeto, serão utilizadas labels visíveis para facilitar a compreensão dos campos e melhorar a acessibilidade da tela de login.

### Hierarquia Visual

A hierarquia visual ajuda o usuário a identificar quais ações são mais importantes.

O **Primary Button** será utilizado para a principal ação da tela, que será **"Entrar"**. Ele terá maior destaque visual, utilizando uma cor de maior contraste e preenchimento sólido.

As ações secundárias terão menos destaque. Por exemplo:

* "Esqueci minha senha"
* "Criar conta"
* "Entrar com Google"

Essas ações poderão utilizar links ou botões com estilo secundário, evitando competir visualmente com o botão principal.

---

## 2. Estados de Validação dos Campos de Entrada

Os campos de entrada terão diferentes estados visuais para informar ao usuário o que está acontecendo.

### Default — Padrão

O campo terá uma borda neutra, fundo claro e label facilmente legível.

Exemplo:

**E-mail**

[ Digite seu e-mail ]

Esse será o estado inicial do campo.

### Focus — Foco

Quando o usuário selecionar o campo, ele receberá um destaque visual.

Será utilizada uma borda azul e um indicador de foco para mostrar claramente qual campo está selecionado.

Exemplo:

**E-mail**

[ [joao@email.com](mailto:joao@email.com) ]

### Error — Erro

Quando o conteúdo informado estiver incorreto ou faltar alguma informação obrigatória, o campo será apresentado com borda vermelha.

Também será apresentada uma mensagem explicativa abaixo do campo.

Exemplo:

**E-mail**

[ email inválido ]

**Informe um endereço de e-mail válido.**

O objetivo é explicar o problema para que o usuário consiga corrigi-lo.

### Success — Sucesso

Quando o preenchimento estiver correto, o campo poderá apresentar uma indicação visual de sucesso.

Será utilizada uma borda em tom verde e um indicador de confirmação.

Exemplo:

**E-mail**

[ [joao@email.com](mailto:joao@email.com) ✓ ]

### Disabled — Desabilitado

Quando um campo ou botão não puder ser utilizado naquele momento, ele será apresentado com aparência reduzida.

Será utilizado menor contraste visual e uma cor mais clara para indicar que o elemento está indisponível.

---

## 3. Padrões de Acessibilidade

A interface deverá utilizar contraste adequado entre texto e fundo para facilitar a leitura.

Os elementos importantes não dependerão somente de cores para transmitir uma informação. Por exemplo, um erro será apresentado com cor vermelha e também com uma mensagem explicativa.

A navegação deverá permitir o uso da tecla **Tab**, possibilitando que o usuário percorra os campos e botões da tela sem precisar utilizar o mouse.

Os campos também deverão possuir labels claras para facilitar a compreensão por usuários de tecnologias assistivas e leitores de tela.

---

# 4. Design System do Formulário

O projeto terá componentes reutilizáveis para manter a consistência visual da interface.

## Componente de Input

O componente de campo de texto terá as seguintes variantes:

* Default
* Focus
* Error
* Success
* Disabled

Cada estado apresentará uma diferença visual para informar ao usuário a situação atual do campo.

## Componente de Botão

O componente de botão terá os seguintes tipos:

### Primary

Utilizado para ações principais.

Exemplo:

**Entrar**

### Secondary

Utilizado para ações secundárias.

Exemplo:

**Criar conta**

Os botões também terão estados:

* Default
* Hover
* Disabled

---

# 5. Estrutura da Tela de Login

A tela de login será organizada de forma centralizada e conterá:

* Logo ou nome da aplicação;
* Título "Bem-vindo!";
* Campo de e-mail;
* Campo de senha;
* Opção para exibir ou ocultar a senha;
* Checkbox "Lembrar de mim";
* Link "Esqueci minha senha";
* Botão principal "Entrar";
* Divisor visual;
* Opção de login social;
* Link para criação de conta.

A organização terá como objetivo deixar a tela simples e fácil de entender.

---

# 6. Prototipagem Interativa

O protótipo será configurado no Figma para simular a utilização da tela.

O botão principal poderá apresentar alteração visual quando o cursor passar sobre ele.

Também será criado um segundo frame para representar uma situação de erro de autenticação.

Mensagem apresentada:

**E-mail ou senha inválidos.**

Essa mensagem será exibida próxima aos campos de login para informar ao usuário o motivo pelo qual o acesso não foi realizado.

---

# 7. Organização do Projeto

O projeto será dividido em componentes reutilizáveis e telas.

### Componentes

* Input
* Button Primary
* Button Secondary
* Checkbox
* Link

### Telas

* Login — Estado padrão
* Login — Erro de autenticação

A utilização de componentes facilita a manutenção e mantém o mesmo padrão visual em diferentes partes do sistema.

---

# 8. Conclusão

O projeto de UI/UX da tela de login foi planejado para ser simples, organizado e acessível.

A utilização de labels, estados de campos, hierarquia visual, componentes reutilizáveis e feedbacks de erro ajuda o usuário a entender melhor as ações disponíveis.

O protótipo desenvolvido no Figma representa uma base visual para o desenvolvimento futuro da tela de login do projeto Nova-Web.
