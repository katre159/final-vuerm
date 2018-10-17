<template>
  <div id="app">
    <Form :onSubmit="() => console.log('submit')">
      <div>
        <Field label="First name" name="firstName" />
      </div>
    </Form>
  </div>
</template>

<script>
import Form from './components/Form';
import Field from './components/Field';

export default {
  name: 'app',
  components: {
    Form,
    Field
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
