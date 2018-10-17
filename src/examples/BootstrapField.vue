<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <Field
      :class="`form-control ${fieldState.touched && fieldState.error ? 'is-invalid' : ''}`"
      :id="id"
      :name="name"
      required
      :subscriptions="subscriptions"
      @update="handleFieldUpdate"
    />
    <div v-if="fieldState.touched && fieldState.error" class="invalid-feedback">{{ fieldState.error }}</div>
  </div>
</template>

<script>
import Field from '../components/Field';

export default {
  name: 'BootstrapField',
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
