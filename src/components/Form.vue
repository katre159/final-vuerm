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
    initialValues: {
      type: Object,
      default: () => {},
    },
    onSubmit: {
      type: Function,
      required: true
    },
    subscriptions: {
      type: Object,
      default: () => ({
        values: true
      })
    },
    validate: {
      type: Function,
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
    this.form = createForm({
      initialValues: this.initialValues,
      onSubmit: this.onSubmit,
      validate: this.validate,
    });

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