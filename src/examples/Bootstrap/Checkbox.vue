<template>
  <div class="form-group form-check">
    <Field
        :class="`form-check-input ${fieldState.touched && fieldState.error ? 'is-invalid' : ''}`"
        :subscriptions="subscriptions"
        id="defaultCheck1"
        name="exampleCheckbox"
        required
        type="checkbox"
        @update="onFieldUpdate"
    />

    <label class="form-check-label" for="defaultCheck1">Default checkbox</label>

    <div v-if="fieldState.touched && fieldState.error" class="invalid-feedback">{{ fieldState.error }}</div>
  </div>
</template>

<script>
import Field from '../../components/Field';

export default {
  name: 'Checkbox',
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
