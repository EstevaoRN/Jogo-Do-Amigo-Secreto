# Amigo Secreto - Sorteio Aleatório

Este projeto é uma aplicação simples para realizar sorteios de "Amigo Secreto" entre amigos. O usuário pode adicionar nomes à lista, realizar o sorteio e visualizar o resultado, tudo de maneira interativa.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilos para a interface.
- **JavaScript**: Lógica de sorteio e manipulação da DOM.

## Instalação

### Pré-requisitos

Este projeto não possui dependências externas, então basta ter um navegador moderno instalado para rodá-lo localmente.

### Passos para executar o projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
2. Abra a pasta do projeto:
   ```bash
   cd amigo-secreto

Abra o arquivo index.html em seu navegador: Você pode simplesmente dar um duplo clique no arquivo index.html ou abrir diretamente no navegador. O navegador exibirá a aplicação, onde você poderá adicionar nomes e realizar o sorteio.

Ou se preferir, você pode usar um servidor local simples para rodar o projeto.

Como Usar
Adicionar amigos: Digite o nome de um amigo no campo de texto e clique em "Adicionar". O nome será adicionado à lista de amigos.

Sortear amigos: Clique no botão "Sortear amigo" para sortear um nome aleatório da lista e exibi-lo na tela.

Limpar a lista: Se desejar, clique no botão "Limpar Lista" para remover todos os nomes da lista de amigos.

Como funciona:
O código JavaScript gerencia a lógica de adicionar amigos à lista, sortear um nome aleatório e exibir o resultado na tela.
A lista é renderizada dinamicamente conforme você adiciona ou remove nomes.
Cada clique no botão "Sortear amigo" seleciona um nome aleatório da lista e o exibe na tela.

Estrutura do Projeto
```bash
amigo-secreto/
│
├── index.html      # Arquivo principal HTML
├── style.css       # Arquivo de estilos CSS
├── app.js          # Arquivo de lógica em JavaScript
└── README.md       # Este arquivo

Dependências
Este projeto não utiliza dependências externas. Tudo é feito com JavaScript, HTML e CSS puros.

Como Contribuir
Faça o fork deste repositório.
Crie uma branch para sua feature (git checkout -b minha-feature).
Comite suas alterações (git commit -am 'Adicionei uma nova feature').
Faça push para a branch (git push origin minha-feature).
Abra um pull request para o repositório original.
Possíveis Problemas e Soluções
1. Problema: Não consigo ver a lista de amigos após adicionar um nome.
Solução: Verifique se você adicionou corretamente o nome e se o JavaScript está funcionando corretamente. Abra as ferramentas de desenvolvedor no navegador (pressionando F12) e veja se há erros no console.

2. Problema: O botão de sorteio não funciona.
Solução: Verifique se você tem pelo menos um amigo na lista. O sorteio só ocorre se houver pelo menos um nome na lista. Caso contrário, uma mensagem de alerta será exibida.

3. Problema: A página não está estilizada como esperado.
Solução: Verifique se o arquivo style.css está corretamente vinculado no HTML. Se os estilos não aparecerem, tente forçar o recarregamento da página (Ctrl + F5) para limpar o cache.

4. Problema: Como adicionar mais funcionalidades ao sorteio?
Solução: Se você quiser adicionar mais funcionalidades, como exibir todos os sorteios de uma vez ou adicionar validações extras, você pode alterar o código JavaScript para ajustar o comportamento. O código está estruturado de forma simples, então você pode facilmente personalizá-lo de acordo com suas necessidades.
