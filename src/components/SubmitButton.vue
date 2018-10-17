<template>
  <button type="submit" @click.prevent="submit">
    <slot />
  </button>
</template>

<script>
import { findForm } from '../utils/form';

export default {
  name: 'SubmitButton',
  methods: {
    submit() {
      findForm(this).submit();
    }
  }
}
</script>