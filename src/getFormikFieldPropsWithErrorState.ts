import { FormikContextType } from 'formik'

export type GetFormikFieldPropsOptions<T extends object> = {
  formik: FormikContextType<T>
  fieldName: string
}

export const getFormikFieldPropsWithErrorState = <T extends object>({
  fieldName,
  formik,
}: GetFormikFieldPropsOptions<T>) => {
  const meta = formik.getFieldMeta(fieldName)

  return {
    error: meta.touched ? meta.error : undefined,
    ...formik.getFieldProps(fieldName),
  }
}
