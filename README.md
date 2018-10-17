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
https://github.com/final-form/final-form#config

Example:
```vue
{
  onSubmit: handleSubmit
}
```

##### `subscriptions?`

Object containing the values you wish to be updated about.  
https://github.com/final-form/final-form#formsubscription--string-boolean-

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

##### `@update`

Returns `formState` object.  
https://github.com/final-form/final-form#formstate


---


### `<Field>`

#### Props:

##### `config?`

Additional field configuration. This is where you can apply field-level validation.  
https://github.com/final-form/final-form#fieldconfig

##### `name`

Name to register field values to. This is a required prop.  
https://github.com/final-form/final-form#field-names

##### `subscriptions?`

Object containing the values you wish to be updated about.  
https://github.com/final-form/final-form#fieldsubscription--string-boolean-

Example:
```vue
{
  dirty: true,
  valid: true,
  values: true
}
```

##### `type?`

Input type. Default is `text`.

#### Events:

##### `@update`

Returns `formState` object.  
https://github.com/final-form/final-form#fieldstate


---


### `<ResetButton>`


---


### `<SubmitButton>`