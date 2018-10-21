<template>
  <select :name="name" :value="fieldState.value" @blur="fieldState.blur" @focus="fieldState.focus" @input="handleInput">
    <slot />
  </select>
</template>

<script>
import { findForm } from '../utils/form';

export default {
  name: 'Select',
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
      default: () => {}
    }
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
      this.fieldState.change(event.target.value || '');
    }
  }
}
</script>
