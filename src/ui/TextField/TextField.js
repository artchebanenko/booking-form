import { Field } from 'react-final-form'
import { TextInput } from '../TextInput'

export const TextField = ({ name, parse, format, ...props }) => (
  <Field name={name} parse={parse} format={format}>
    {({ input, meta }) => {
      const error =
        (meta.error || meta.submitError) &&
        meta.touched &&
        !meta.dirtySinceLastSubmit
          ? meta.error || meta.submitError
          : null

      return <TextInput {...input} error={error} {...props} />
    }}
  </Field>
)
