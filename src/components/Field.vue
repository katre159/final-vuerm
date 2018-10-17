<template>
  <input
    :name="name"
    :type="type"
    :value="fieldState.value"
    @blur="fieldState.blur"
    @focus="fieldState.focus"
    @input="event => fieldState.change(event.target.value || event.target.checked)"
  >
</template>

<script>
import { findForm } from '../utils/form';

export default {
  name: 'Field',
  props: {
    name: {
      type: String,
      required: true
    },
    subscriptions: {
      type: Object,
      default: () => ({
        value: true
      })
    },
    type: {
      type: String,
      default: 'text'
    },
  },
  data() {
    return {
      unregisterField: null,
      fieldState: null,
    };
  },
  created() {
    this.unregisterField = findForm(this).registerField(
      this.name,
      fieldState => {
        this.fieldState = fieldState;
        this.$emit('update', fieldState);
      },
      this.subscriptions
    );
  },
  destroyed() {
    this.unregisterField();
  }
}
</script>