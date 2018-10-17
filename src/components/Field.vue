<template>
  <input
    :name="name"
    :type="type"
    :value="fieldState.value"
    @blur="fieldState.blur"
    @focus="fieldState.focus"
    @input="handleInput"
  >
</template>

<script>
import { findForm } from '../utils/form';

export default {
  name: 'Field',
  props: {
    config: {
      type: Object,
      default: () => {}
    },
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
      this.subscriptions,
      this.config
    );
  },
  destroyed() {
    this.unregisterField();
  },
  methods: {
    handleInput(event) {
      if (this.type === 'checkbox') {
        this.fieldState.change(event.target.checked);
      } else {
        this.fieldState.change(event.target.value || '');
      }
    }
  }
}
</script>