<template>
  <div class="root-application">
    <button @click="openModal">Открыть</button>
    <AppModal v-if="isOpenModal" @close="closeModal" :title="'Модальное окно'">
      <TreeModel @close="closeModal"></TreeModel>
    </AppModal>
  </div>
</template>
<script setup>
import AppModal from "@/components/AppModal.vue";
import TreeModel from "@/views/TreeModel.vue";
import { ref } from "vue";
const isOpenModal = ref(false)
const closeModal = () => {
  isOpenModal.value = false
}
const openModal = () => {
  isOpenModal.value = true
}
</script>
<style lang="scss">
.root-application{
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
}
</style>
