<template>
    <div class="modal" @click="close">
        <div class="modal-content" @click.stop>
            <div class="modal-head">
                <div class="title">
                    {{ props.title }}
                </div>
                <div class="btn-close">
                    <button class="danger" type="button" @click="close">
                        Закрыть
                    </button>
                </div>
            </div>
            <div class="modal-body">
                <slot>

                </slot>
            </div>
        </div>
    </div>
</template>
<script setup>

const emits = defineEmits(['close'])
const props = defineProps({
    title: {
        type: String,
        default: ""
    }
})
const close = () => {
    emits("close")
}
</script>
<style lang="scss">
.modal {
    position: absolute;
    left: 0;
    top: 0;
    background: #0005;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-content {
        min-width: 500px;
        padding: 20px;
        background: #fff;
        border-radius: 20px;
        box-shadow: 0px 0px 20px #fff9;
    }

    .modal-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        .title {
            font-size: 1.3rem;
            font-weight: 500;
            margin-right: 20px;
        }
    }

    .modal-body {}

    .modal-foot {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 10px;
    }
}

button {
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
}

.danger {
    border: 1px solid #f56c6c;
    background: #fef0f0;
    color: #f56c6c;

    &:hover {
        background: #f56c6c;
        color: #fff;
    }
}

.item{
    padding: 3px 5px;
    cursor:pointer;
    margin-bottom:3px;
    &:hover{
        color:red;
    }
}
</style>