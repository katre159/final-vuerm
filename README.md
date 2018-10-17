# final-vuerm

Form management solution based on checkered_flag Final Form.

There are four components that you can import in your project:
```vue
import { Form, Field, ResetButton, SubmitButton } from 'final-vuerm';
```

Form example:
```vue
<Form :onSubmit="handleSubmit">
  <Field name="fieldName" />
</Form>
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
