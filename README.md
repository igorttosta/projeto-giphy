# Projeto Giphy

Uma aplicação web para buscar e favoritar GIFs usando a API do Giphy, construída com Quasar Framework e Vue.js.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Quasar CLI (@quasar/cli)

## Como começar

### 1. Clone o repositório

```bash
git clone https://github.com/igorttosta/projeto-giphy.git
cd projeto-giphy
```

### 2. Instale as dependências

Usando npm:

```bash
npm install
```

Ou usando yarn:

```bash
yarn
```

### 3. Inicie a aplicação em modo desenvolvimento

Usando o Quasar CLI:

```bash
quasar dev
```

Ou alternativamente:

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:9000`

## Estrutura do Projeto

```
├── src/                    # Código fonte
│   ├── assets/             # Arquivos estáticos (imagens, etc)
│   ├── boot/               # Arquivos de inicialização do Quasar
│   ├── components/         # Componentes Vue reutilizáveis
│   ├── css/               # Arquivos de estilo
│   ├── layouts/           # Layouts da aplicação
│   ├── pages/             # Páginas da aplicação
│   ├── router/            # Configuração de rotas
│   ├── services/          # Serviços e integrações
│   └── stores/            # Gerenciamento de estado (Pinia)
├── public/                # Arquivos públicos
└── quasar.config.ts      # Configuração do Quasar
```

## Scripts Disponíveis

- `quasar dev`: Inicia o servidor de desenvolvimento
- `quasar build`: Compila o projeto para produção
- `quasar serve`: Serve a versão de produção localmente
- `npm run format` ou `yarn format`: Formata os arquivos do projeto

## Funcionalidades

- Busca de GIFs
- Favoritar GIFs
- Visualização de GIFs favoritos
- Interface responsiva

## Tecnologias Utilizadas

- Vue.js 3
- Quasar Framework v2
  - Componentes UI Material Design
  - Suporte a SSR/PWA/Cordova/Capacitor
  - Hot-reload
  - Tree-shaking
- TypeScript
- Pinia (Gerenciamento de Estado)
- Axios
