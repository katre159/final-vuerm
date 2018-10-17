<template>
  <form>
    <slot />
  </form>
</template>

<script>
import { createForm } from 'final-form'

export default {
  name: 'Form',
  props: {
    config: {
      type: Object,
      required: true
    },
    subscriptions: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      form: null,
      unsubscribe: null
    };
  },
  created() {
    this.form = createForm(this.config);

    this.unsubscribe = this.form.subscribe(
      formState => {
        this.$emit('update', formState);
      },
      this.subscriptions
    );
  },
  destroyed() {
    this.unsubscribe();
  },
}
</script>