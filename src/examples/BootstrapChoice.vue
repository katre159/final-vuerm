<template>
  <div class="form-group form-check">
    <Field
        :class="`form-check-input ${fieldState.touched && fieldState.error ? 'is-invalid' : ''}`"
        :id="id"
        :name="name"
        :subscriptions="subscriptions"
        :type="type"
        :value="value"
        required
        @update="onFieldUpdate"
    />
    <label :for="id" class="form-check-label">{{ label }}</label>
    <div v-if="fieldState.touched && fieldState.error" class="invalid-feedback">{{ fieldState.error }}</div>
  </div>
</template>

<script>
  import Field from '../components/Field';

  export default {
    name: 'BootstrapChoice',
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
      },
      type: {
        type: String,
        required: true,
        validator: function (value) {
          return ['checkbox', 'radio'].indexOf(value) !== -1
        }
      },
      value: {
        type: String,
        default: ''
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
      onFieldUpdate(fieldState) {
        this.fieldState = fieldState;
      }
    }
  }
</script>
