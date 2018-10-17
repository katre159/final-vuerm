<template>
  <div>
    <label>{{ label }}</label>
    <input name="name" @input="event => fieldState.change(event.target.value)">
  </div>
</template>

<script>
  export default {
    name: 'Field',
    props: {
      label: String,
      name: String
    },
    data() {
      return {
        unregisterField: null,
        fieldState: null,
      };
    },
    created() {
      this.unregisterField = this.$parent.form.registerField(
        this.name,
        fieldState => {
          this.fieldState = fieldState;
        },
        {
          value: true
        }
      );
    },
  }
</script>