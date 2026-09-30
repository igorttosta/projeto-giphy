# Projeto Giphy

Aplicação web para buscar GIFs e montar uma lista de favoritos, usando a API do Giphy. Feita com Vue 3 e Quasar.

## Funcionalidades

- GIFs em alta na página inicial
- Busca de GIFs por termo
- Favoritar e desfavoritar GIFs
- Página de favoritos, que continuam salvos depois de fechar o navegador
- Interface responsiva, com menu lateral e barra superior

## Destaques técnicos

- **Vue 3 com Composition API** e TypeScript
- **Estado global com Pinia**: a store de favoritos persiste os dados no `localStorage`
- **Camada de serviço isolada** (`services/giphy.ts`): os componentes não chamam a API diretamente
- **Instância do Axios configurada num boot file** do Quasar, com a URL base e a chave da API lida de variável de ambiente
- **Componentes do Quasar** (Material Design) para a interface

## Stack

- Vue 3 e TypeScript
- Quasar Framework 2 (com Vite)
- Pinia
- Axios
- API do Giphy

## Como rodar

Pré-requisitos: Node.js 18 ou superior e uma chave gratuita da API do Giphy, que você cria em [developers.giphy.com](https://developers.giphy.com/dashboard/).

1. Clone o repositório e instale as dependências:

   ```bash
   git clone https://github.com/igorttosta/projeto-giphy.git
   cd projeto-giphy
   npm install
   ```

2. Copie o arquivo de exemplo e preencha a sua chave:

   ```bash
   cp .env.example .env
   ```

   ```env
   GIPHY_API_KEY=sua-chave-aqui
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

O Quasar abre a aplicação no navegador automaticamente.

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Gera a versão de produção em `dist/spa` |
| `npm run lint` | Verifica o código com o ESLint |
| `npm run format` | Formata o código com o Prettier |

## Estrutura

```
src/
  boot/        Configuração do Axios
  components/  Card de GIF, barra superior e menu lateral
  layouts/     Layout principal
  pages/       Início, favoritos e sobre
  services/    Chamadas à API do Giphy
  stores/      Store de favoritos (Pinia)
```

## Autor

Feito por **Igor Tosta** · [LinkedIn](https://www.linkedin.com/in/matos-igor-tosta/) · [GitHub](https://github.com/igorttosta)
