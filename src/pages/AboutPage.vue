<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">Sobre</div>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Sobre o Desenvolvedor</div>
          </q-card-section>

          <q-card-section>
            <p>
              Desenvolvedor de Software experiente com sólida formação em desenvolvimento fullstack,
              sistemas backend e arquitetura de microsserviços. Mais de 3 anos de experiência na
              criação e manutenção de sistemas de alto desempenho, sempre buscando aprimorar a
              experiência do usuário e a confiabilidade geral do sistema.
            </p>

            <div class="text-subtitle2 q-mt-md">Principais Competências:</div>
            <ul>
              <li>Desenvolvimento Fullstack com TypeScript, NodeJS, NestJS, ReactJS e Jest</li>
              <li>Arquitetura de Microsserviços e padrões SOLID</li>
              <li>AWS, Docker e Kubernetes para deploy e orquestração</li>
              <li>Bancos de dados PostgreSQL e MongoDB</li>
              <li>Mensageria com Kafka</li>
              <li>Testes unitários, integração e E2E</li>
              <li>CI/CD com GitLab e Jenkins</li>
            </ul>

            <div class="text-subtitle2 q-mt-md">Conquistas Relevantes:</div>
            <ul>
              <li>
                Aumentou a confiabilidade do sistema em 20% e reduziu o tempo de resposta da API em
                15%
              </li>
              <li>Liderou implementação de microsserviços com Docker e Kubernetes</li>
              <li>Garantiu 85% de conformidade com padrões da indústria</li>
              <li>Otimizou pipelines CI/CD, reduzindo tempo de deploy em 25%</li>
            </ul>

            <p class="q-mt-md">
              Apaixonado por resolver desafios complexos, prospero em ambientes dinâmicos, focando
              na entrega de trabalho de qualidade que agrega valor ao produto e melhora a
              experiência do usuário. Comprometido com o aprendizado contínuo, abraço novas
              tecnologias e tendências do setor enquanto promovo colaboração e trabalho em equipe
              para alcançar objetivos comuns e impulsionar o sucesso.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Propósito do Teste</div>
          </q-card-section>

          <q-card-section>
            <p>
              Este projeto foi desenvolvido como parte de um teste técnico para demonstrar
              habilidades em desenvolvimento web moderno, com foco em:
            </p>
            <ul>
              <li>
                Implementação de uma aplicação web responsiva usando Vue.js 3 e Quasar Framework
              </li>
              <li>Integração com APIs externas (Giphy API)</li>
              <li>Gerenciamento de estado com Pinia</li>
              <li>Desenvolvimento de interfaces de usuário intuitivas e atraentes</li>
              <li>Implementação de funcionalidades de busca e favoritos</li>
              <li>Uso de TypeScript para maior segurança e manutenibilidade do código</li>
            </ul>
          </q-card-section>

          <q-card-section>
            <p>O projeto demonstra boas práticas de desenvolvimento, incluindo:</p>
            <ul>
              <li>Componentização e reutilização de código</li>
              <li>Gerenciamento eficiente de estado da aplicação</li>
              <li>Layout responsivo e adaptável</li>
              <li>Código limpo e bem organizado</li>
            </ul>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 100%;
}

ul {
  margin: 0;
  padding-left: 1.5rem;
}

p {
  margin: 0;
  margin-bottom: 1rem;
}
</style>
