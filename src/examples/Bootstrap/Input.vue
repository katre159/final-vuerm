<template>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>

    <Field
        :class="`form-control ${fieldState.touched && fieldState.error ? 'is-invalid' : ''}`"
        :subscriptions="subscriptions"
        id="exampleFormControlInput1"
        name="exampleEmail"
        placeholder="name@example.com"
        required
        type="email"
        @update="onFieldUpdate"
    />

    <div v-if="fieldState.touched && fieldState.error" class="invalid-feedback">{{ fieldState.error }}</div>
  </div>
</template>

<script>
import Field from '../../components/Field';

export default {
  name: 'Input',
  components: {
    Field
  },
  data() {
    return {
      fieldState: {},
      subscriptions: {
        error: true,
        touched: true,
        value: true
      }
    };
  },
  methods: {
    onFieldUpdate(fieldState) {
      this.fieldState = fieldState;
    }
  }
}
</script>
