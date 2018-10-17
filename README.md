# final-vuerm

Form management solution for Vue.js based on [:checkered_flag: Final Form](https://www.npmjs.com/package/final-form).




## Simple form example

```vue
import { Form, Field, ResetButton, SubmitButton } from 'final-vuerm';

<Form :onSubmit="handleSubmit">
  <Field name="fieldName" />
  
  <ResetButton>Reset</ResetButton>
  <SubmitButton>Submit</SubmitButton>
</Form>

```




## API


### `<Form>`

#### Props:

##### `config`

Configuration used for creating a form instance. `onSubmit` is required. 
See more [here](https://github.com/final-form/final-form#config).

Example:
```vue
{
  onSubmit: handleSubmit
}
```

##### `subscriptions`

Object containing the values you wish to be updated about. 
See more [here](https://github.com/final-form/final-form#formsubscription--string-boolean-).

Example:
```vue
{
  active: true,
  dirty: true,
  touched: true,
  valid: true,
  value: true
}
```

#### Events:

##### `update`

Returns `formState` object. Read more [here](https://github.com/final-form/final-form#formstate).