

<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text" >
</template>

<script>


export default {
    name: 'uiiInput',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
           this.$emit('update:modelValue', event.target.value) 
        }
    }
}
</script>

<style scoped>
    .input {
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px;
}
</style>