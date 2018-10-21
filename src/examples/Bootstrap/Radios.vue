<template>
  <fieldset class="form-group">
    <div class="form-check">
      <Field
          :subscriptions="subscriptions"
          class="form-check-input"
          id="exampleRadios1"
          name="exampleRadios"
          type="radio"
          value="option1"
          @update="onFieldUpdate"
      />
      <label class="form-check-label" for="exampleRadios1">Default radio</label>
    </div>

    <div class="form-check">
      <Field
          :subscriptions="subscriptions"
          class="form-check-input"
          id="exampleRadios2"
          name="exampleRadios"
          type="radio"
          value="option2"
          @update="onFieldUpdate"
      />
      <label class="form-check-label" for="exampleRadios2">Second default radio</label>
    </div>

    <div class="form-check">
      <Field
          :subscriptions="subscriptions"
          class="form-check-input"
          disabled
          id="exampleRadios3"
          name="exampleRadios"
          type="radio"
          value="option3"
          @update="onFieldUpdate"
      />
      <label class="form-check-label" for="exampleRadios3">Disabled radio</label>
    </div>
  </fieldset>
</template>

<script>
import Field from '../../components/Field';

export default {
  name: 'Radios',
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
