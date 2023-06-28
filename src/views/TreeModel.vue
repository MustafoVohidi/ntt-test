<template>
  <div>
    <div class="content">
      <RenderTree :data="dataFromJSON"  @selectid="selectid">
    </RenderTree>
    </div>
    <div class="modal-foot">
      <button class="success" @click="select">Ок</button>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import RenderTree from "@/components/RenderTree.vue";
const emits = defineEmits(["close"]);
const store = useStore();
const dataFromJSON = computed(() => store.state.dataFromJSON);
const getData = () => store.dispatch("getData");
const thisitem=ref(0)
const select = () => {
  alert("id="+thisitem.value,)
  emits("close");
};
onMounted(async () => {
  await getData();
//   console.log(dataFromJSON.value);
});

const selectid=(id)=>{
  thisitem.value=id
  console.log(thisitem.value, "tree")
}
</script>
<style lang="scss">
.success {
  border: 1px solid #67c23a;
  background: #f0f9eb;
  color: #67c23a;

  &:hover {
    background: #67c23a;
    color: #fff;
  }
}
</style>
