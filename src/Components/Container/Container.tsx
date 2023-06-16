import React, { ReactNode } from 'react'
import { ListCustom, dataGridCustomStyles } from './styles'
import { Datagrid } from 'react-admin'
import TextField from '../TextField/TextField';
import { CONFIGURATION_FORM } from '../../Common';

interface Props {
  children: ReactNode
}

const {
  inputTypes
} = CONFIGURATION_FORM;

const postFilters = [
  <TextField variant={inputTypes.variant} source="q" inputType='text' label="Buscar" alwaysOn />,
];

const Container = ({ children }: Props) => {
  
  

  return (
    <ListCustom filters={postFilters}>
      <Datagrid rowClick="edit" sx={dataGridCustomStyles}>
        {children}
      </Datagrid>
    </ListCustom>
  )
}

export default Container