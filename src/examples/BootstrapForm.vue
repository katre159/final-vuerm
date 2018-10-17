<template>
  <div class="container">
    <h1>Form example</h1>

    <Form
      :onSubmit="handleSubmit"
      :initial-values="initialValues"
      :subscriptions="subscriptions"
      :validate="validate"
      @update="handleFormUpdate"
    >
      <BootstrapField id="firstName" label="First name" name="firstName" />
      <BootstrapField id="lastName" label="Last name" name="lastName" />

      <ResetButton class="btn btn-light">Reset</ResetButton>
      <SubmitButton class="btn btn-primary" style="float: right">Submit</SubmitButton>
    </Form>

    <p>Submitted values:</p>
    <pre>{{ submittedValues }}</pre>

    <p>Form state:</p>
    <pre>{{ formState }}</pre>
  </div>
</template>

<script>
import BootstrapField from './BootstrapField';
import Form from '../components/Form';
import Field from '../components/Field';
import ResetButton from '../components/ResetButton';
import SubmitButton from '../components/SubmitButton';

export default {
  name: 'BootstrapExample',
  components: {
    BootstrapField,
    Form,
    Field,
    ResetButton,
    SubmitButton
  },
  data() {
    return {
      formState: {},
      initialValues: {
        firstName: 'test'
      },
      submittedValues: null,
      subscriptions: {
        active: true,
        dirty: true,
        dirtyFields: true,
        errors: true,
        hasValidationErrors: true,
        submitFailed: true,
        submitSucceeded: true,
        valid: true,
        values: true,
        visited: true
      }
    };
  },
  methods: {
    handleSubmit(submittedValues) {
      this.submittedValues = submittedValues;
    },
    handleFormUpdate(formState) {
      this.formState = formState;
    },
    validate(values) {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "Required";
      }

      if (!values.lastName) {
        errors.lastName = "Required";
      }

      return errors;
    }
  }
}
</script>

<style scoped>
p {
  font-weight: bold;
  margin-top: 2rem;
}

pre {
  background-color: #f8f9fa;
  border-radius: 5px;
  padding: 1rem;
}

.container {
  margin-top: 2rem;
}
</style>
