# Pets

## Instalação

1. Baixe e instale o Node: [https://nodejs.org/]
2. \[Opcional\] Instale o Yarn globalmente: `npm install -g yarn`
3. Instale as dependências do projeto: `yarn install` ou `npm install`
4. Inicie o ambiente de desenvolvimento: `npm start` ou `yarn start`.
5. Rodar testes unitários: `npm test` ou `yarn test`.

## Principais dependências

* [React](https://reactjs.org/)
* [Redux](http://redux.js.org)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
* [Typescript](https://www.typescriptlang.org/)

## Estrutura de diretórios

```
/
├─ src/              # Aplicação
├─ __tests__/        # Testes unitários
├─ ├─actions/        # Ações redux
├─ ├─components/     # Componentes react
├─ ├─constants/      # Actions Types
├─ ├─pages/          # Rotas
├─ ├─reducers/       # Reducers
├─ ├─services/       # Api
├─ ├─store/          # Configuração store redux 
├─ ├─styles/         # Arquivos relacionados a estilização
├─ .editorconfig     # Preferência do editorconfig
├─ .eslintrc         # Preferência do linter Javascript
├─ .gitignore        # Lista de arquivos e pastas ignoradas pelo git
├─ .prettierrc       # Preferência do prettier
├─ package.json      # Manifesto do projeto
└─ README.md         # Esse arquivo
```