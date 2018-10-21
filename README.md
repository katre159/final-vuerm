# final-vuerm

Form management solution for Vue.js based on [:checkered_flag: Final Form](https://www.npmjs.com/package/final-form).




## Installation

```bash
yarn add final-vuerm
```

or

```bash
npm install final-vuerm --save
```




## Simple form example

```js
import { Form, Field, ResetButton, SubmitButton } from 'final-vuerm';

<Form :config="{ onSubmit: handleSubmit }">
  <Field name="fieldName" />
  
  <ResetButton>Reset</ResetButton>
  <SubmitButton>Submit</SubmitButton>
</Form>

```




## API




### `<Form>`

#### Props:

##### `config`<a name="form-config"></a>

Configuration used for creating a form instance. `onSubmit` is required.  
https://github.com/final-form/final-form#config

Example:
```js
{
  onSubmit: handleSubmit
}
```

##### `subscriptions?`

Object containing the values you wish to be updated about.  
https://github.com/final-form/final-form#formsubscription--string-boolean-

Example:
```js
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
```js
{
  dirty: true,
  valid: true,
  values: true
}
```

##### `type?`

Input type. Default is `text`.

##### `value?`

Input value. Used for `radio` inputs.
Use [`<Form>` `config`](#form-config) prop to set initial values, otherwise they will not be recorded in state.

#### Events:

##### `@update`

Returns `formState` object.  
https://github.com/final-form/final-form#fieldstate


---


### `<Select>`

See props and events definitions from [`<Field>`](#field).

#### Props:

##### `config?`

##### `name`

##### `subscriptions?`

#### Events:

##### `@update`


---


### `<ResetButton>`
Restores initial values.


---


### `<SubmitButton>`
Submits the form.