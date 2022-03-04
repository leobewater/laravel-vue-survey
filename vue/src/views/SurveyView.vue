<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900">
          {{ model.id ? model.title : 'Create a Survey' }}
        </h1>
      </div>

      <form @submit.prevent="saveSurvey">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="">
              
            </div>
        </div>
      </form>
    </template>
  </PageComponent>
</template>

<script setup>
import store from '../store'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import PageComponent from '../components/PageComponent.vue'

const route = useRoute()

// create empty survey
let model = ref({
  title: '',
  status: false,
  description: null,
  image: null,
  expire_date: null,
  questions: [],
})

// find survey from url params
if (route.params.id) {
  model.value = store.state.surveys.find(
    (s) => s.id === parseInt(route.params.id)
  )
}

function saveSurvey() {}
</script>
