<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <!-- Seção do Desenvolvedor -->
      <div class="col-12 col-md-6">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Sobre o Desenvolvedor</div>
          </q-card-section>

          <q-card-section>
            <q-banner class="bg-info text-white">
              <template v-slot:avatar>
                <q-icon name="info" />
              </template>
              Esta seção está reservada para suas informações pessoais. Sugerimos incluir:
              <ul class="q-mt-sm">
                <li>Formação acadêmica</li>
                <li>Experiências em desenvolvimento</li>
                <li>Principais habilidades técnicas</li>
                <li>Objetivos profissionais</li>
              </ul>
            </q-banner>
          </q-card-section>
        </q-card>
      </div>

      <!-- Seção do Propósito do Teste -->
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

<script setup lang="ts">
// Componente utilizando Composition API
</script>

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
