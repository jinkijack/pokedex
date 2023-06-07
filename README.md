# Pokédex Angular

Este é um projeto de uma Pokédex desenvolvida em Angular, utilizando a API [PokeAPI.co](https://pokeapi.co/) para obter informações sobre os Pokémon. A Pokédex permite visualizar detalhes dos Pokémon, como nome, tipo, habilidades e estatísticas.
O projeto está disponível pela vercel acesse em [https://jinkijack-pokedex.vercel.app/](https://jinkijack-pokedex.vercel.app/)

## Funcionalidades

- Listagem de todos os Pokémon.
- Pesquisa de Pokémon por nome ou número.
- Exibição dos detalhes de um Pokémon selecionado.

## Pré-requisitos

Certifique-se de ter o seguinte software instalado em sua máquina:

- Node.js (versão 12 ou superior)
- Angular CLI (versão 12 ou superior)

## Configuração do projeto

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/pokedex-angular.git
```

2. Acesse o diretório do projeto:

```bash
cd pokedex-angular
```

3. Instale as dependências do projeto:

```bash
npm install
```

## Uso

1. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

2. Abra o navegador e acesse `http://localhost:4200` para ver a Pokédex em ação.

## Personalização

Caso queira personalizar o projeto, você pode modificar os seguintes arquivos:

- `src/app/components/card/card.component.html`: Layout do card de Pokémon.
- `src/app/components/history-card/history-card.component.html`: Layout dos cards de favoritos e histórico.
- `src/app/services/pokemon.service.ts`: Lógica de interação com a API PokeAPI.co.
- `src/app/domains`: Classes principais dos pokemons, alguns dados da API não foram utilizados e não estão nessas classes.
- `src/app/modules/home/home/home.component.html`: Layout do módulo principal na página app-home.
- `src/app/modules/details/details/details.component.html`: Layout do módulo de detalhes na página `/details-pokemon`.

## Contribuição

Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para a sua funcionalidade (`git checkout -b feature/nome-da-funcionalidade`).
3. Faça suas alterações e commit (`git commit -m 'Adicionar nova funcionalidade`).
4. Envie para o repositório remoto (`git push origin feature/nome-da-funcionalidade`).
5. Abra uma pull request no GitHub.

## Licença

Este projeto está licenciado é open source e pode ser modificado e utilizado por todos.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para utilizar a aba de discussão, abrir um issue ou entrar em contato pelo formulário:
https://tiagocarvalho.me/contact.html
