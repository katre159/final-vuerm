<template>
  <button @click.prevent="reset">
    <slot />
  </button>
</template>

<script>
import { findForm } from '../utils/form';

export default {
  name: 'ResetButton',
  methods: {
    reset() {
      findForm(this).reset();
    }
  }
}
</script>