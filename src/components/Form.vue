<template>
  <div>
    <form>
      <slot />
    </form>

    <div>FormState: {{ formState }}</div>
  </div>
</template>

<script>
  import { createForm } from 'final-form'

  export default {
    name: 'Form',
    props: {
      onSubmit: Function
    },
    data() {
      return {
        form: null,
        unsubscribe: null,
        formState: null
      };
    },
    created() {
      this.form = createForm({
        onSubmit: this.onSubmit,
      });

      this.unsubscribe = this.form.subscribe(
        formState => {
          this.formState = formState;
        },
        {
          values: true
        }
      );
    }
  }
</script>