<template>
  <div class="form-group form-check">
    <Field
      :class="`form-check-input ${fieldState.touched && fieldState.error ? 'is-invalid' : ''}`"
      :id="id"
      :name="name"
      :subscriptions="subscriptions"
      required
      type="checkbox"
      @update="handleFieldUpdate"
    />
    <label class="form-check-label" :for="id">{{ label }}</label>
    <div v-if="fieldState.touched && fieldState.error" class="invalid-feedback">{{ fieldState.error }}</div>
  </div>
</template>

<script>
import Field from '../components/Field';

export default {
  name: 'BootstrapCheckbox',
  components: {
    Field
  },
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
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
    handleFieldUpdate(fieldState) {
      this.fieldState = fieldState;
    }
  }
}
</script>