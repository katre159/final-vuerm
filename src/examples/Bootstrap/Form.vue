<template>
  <div class="container">
    <h1>Form example</h1>

    <Form
        :config="config"
        :subscriptions="subscriptions"
        @update="onFormUpdate"
    >
      <Input />
      <Checkbox />
      <Radios />

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
import Form from '../../components/Form';
import Field from '../../components/Field';
import ResetButton from '../../components/ResetButton';
import SubmitButton from '../../components/SubmitButton';
import Checkbox from './Checkbox';
import Input from './Input';
import Radios from './Radios';

export default {
  name: 'BootstrapForm',
  components: {
    Form,
    Field,
    ResetButton,
    SubmitButton,
    Checkbox,
    Input,
    Radios
  },
  data() {
    return {
      config: {
        initialValues: {
          exampleEmail: 'example@example.com',
          exampleRadios: 'option1'
        },
        onSubmit: this.onSubmit,
        validate: this.validate
      },
      formState: {},
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
    onFormUpdate(formState) {
      this.formState = formState;
    },
    onSubmit(submittedValues) {
      this.submittedValues = submittedValues;
    },
    validate(values) {
      const errors = {};

      if (!values.exampleEmail) {
        errors.exampleEmail = "Required";
      }

      if (values.exampleEmail && !values.exampleEmail.match(/\w+@\w+\.\w+/g)) {
        errors.exampleEmail = "Invalid";
      }

      if (!values.exampleCheckbox) {
        errors.exampleCheckbox = "Required";
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
