========== AULA 1 ==========

Usar vite para criar aplicações react ($ npm create vite@latest), não tem o bundle nem webpack

- Usar tailwindcss -> $ npm i tailwindcss postcss autoprefixer -D
- Configurar postcss -> $ npx tailwindcss init -p

Extensões do vs code para instalar:
- GraphQL
- Tailwind CSS IntelliSense
- PostCSS Language Support

Utilizamos graphCMS (CMS — Content Management System)
Headless CMS (GraphCMS): Painel de ADMIN (dados fornecidos através de uma API REST ou GraphQL)
React que consome essa API do CMS

Clone do GraphCMS
https://app.graphcms.com/clone/1d7442bf5a434389904c44d54a041b01?name=Ignite%20Lab%2002

query = Buscar dados
mutation = Criar, Editar e Deletar dados

OverFetching = Quando o backend retorna muitas informações com algumas que o front não vai nem usar
UnderFetching = Quando o backend não traz informações que o front precisa

Usamos "apollo" no lugar do axios/fetch para requisições no graphql

========== AULA 2 ==========

- Quando vamos começar a transformar um layout em código devemos pensar inicialmente em componentes

- Para gerar um svg a partir do layout do figma, basta selecionar o grupo, clicar com o botão direito e copiar como SVG, feito isso no site "https://svg2jsx.com/" pode colar esse SVG e obter um componente do React

- Não olhar as tags do HTML como estilização (ex: strong pq deixa negrito), deve-se olhar pela semântica delas

========== AULA 3 ==========

- Usamos a biblioteca vimejs para trabalhar com vídeos (https://vimejs.com/)

========== AULA 4 ==========

- Permanent Auth Tokens para escrita de dados no graphcms

- Public Content API para leitura de dados no graphcms

========== AULA 5 ==========

- Ferramenta para quem trabalha com graphql (https://www.graphql-code-generator.com/)

- Graphql codegen é usado apenas em desenvolvimento.

- Instalação das bibliotecas do graphql-code-generator: (npm i @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @graphql-codegen/cli -D)