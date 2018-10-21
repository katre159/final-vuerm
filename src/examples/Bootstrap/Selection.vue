<template>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <Select class="form-control" id="exampleFormControlSelect1" name="exampleSelect">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Select>
  </div>
</template>

<script>
import Select from '../../components/Select';

export default {
  name: 'Selection',
  components: {
    Select
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
