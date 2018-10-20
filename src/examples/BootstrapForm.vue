<template>
  <div class="container">
    <h1>Form example</h1>

    <Form
        :config="config"
        :subscriptions="subscriptions"
        @update="onFormUpdate"
    >
      <BootstrapField id="firstName" label="First name" name="firstName" />
      <BootstrapField id="lastName" label="Last name" name="lastName" />

      <BootstrapChoice id="checkbox" label="Checkbox" name="checkbox" type="checkbox" />

      <fieldset>
        <BootstrapChoice id="radio1" label="Radio1" name="radio" type="radio" value="radio1" />
        <BootstrapChoice id="radio2" label="Radio2" name="radio" type="radio" value="radio2" />
        <BootstrapChoice id="radio3" label="Radio3" name="radio" type="radio" value="radio3" />
      </fieldset>

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
import BootstrapChoice from './BootstrapChoice';
import BootstrapField from './BootstrapField';
import Form from '../components/Form';
import Field from '../components/Field';
import ResetButton from '../components/ResetButton';
import SubmitButton from '../components/SubmitButton';

export default {
  name: 'BootstrapExample',
  components: {
    BootstrapChoice,
    BootstrapField,
    Form,
    Field,
    ResetButton,
    SubmitButton
  },
  data() {
    return {
      config: {
        initialValues: {
          firstName: 'FirstName',
          checkbox: true,
          radio: 'radio2'
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

      if (!values.firstName) {
        errors.firstName = "Required";
      }

      if (!values.lastName) {
        errors.lastName = "Required";
      }

      if (!values.checkbox) {
        errors.checkbox = "Required";
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
