<template>
  <div></div>
</template>

<script setup>
import { ref } from 'vue'

const props = defaultProps({
  question: Object,
  index: Number,
})

const emit = defineEmits(['change', 'addQuestion', 'deleteQuestion'])

const model = ref(JSON.parse(JSON.stringify(props.question)))
</script>
