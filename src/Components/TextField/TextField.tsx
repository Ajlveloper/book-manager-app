import { DateInput, TextInput, TextInputProps } from 'react-admin'
import { customStyles } from './styles'
import { memo } from 'react'

interface Props extends TextInputProps {
    source: string,
    inputType?: 'text' | 'date'
}

const TextField = ({ source, inputType, ...props }:Props) => {
    const inputs = {
        text: <TextInput { ...props } source={source} sx={customStyles()}  />,
        date: <DateInput { ...props } source={source} sx={customStyles()}  />
    }
  return (
    inputType ? inputs[inputType] : null
  )
}

export default memo(TextField)

TextField.defaulProps = {
    inputType: 'text'
}