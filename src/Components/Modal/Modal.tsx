import { ChangeEvent, ReactNode, SetStateAction, useCallback, useEffect, useState } from 'react'
import { CloseButton, CustomModal, ModalChild, customStylesform } from './styles'
import CloseIcon from '@mui/icons-material/Close';
import { Create, Edit, SimpleForm, required } from 'react-admin';
import Title from './Title';
import TextField from '../TextField/TextField';
import { CustomToolbar } from './Toolbar';
import { CREATE_DATA } from '../../Interface/states';
import {
  CONFIGURATION_FORM,
  // INPUTS_NAMES_TYPES,
  NAME_RESOURCES_TYPES,
  buttonDeleteText,
  buttonSaveText,
  createDataTextDefault,
  inputRequiredMessage,
  updateMessagesTitle
} from '../../Common';

interface Props {
  open: boolean,
  name: 'books' | 'authors',
  children?: ReactNode,
  isCreate: boolean,
  createText?: string,
  sourceTitle?: 'title' | 'name',
  sourceContent?: 'author' | 'nationality',
  sourceDate?: 'postDate' | 'yearOfBirth',
  sourcePathValue?: 'books' | 'authors',
  updatedText?:string
}

const {
  reValidateMode,
  mode,
  toolbarTypes,
  inputTypes
} = CONFIGURATION_FORM;

const {
  books: BOOKS
} = NAME_RESOURCES_TYPES;

const Modal = ({ open, name, isCreate, createText, updatedText, sourceTitle, sourceContent, sourceDate, sourcePathValue }: Props) => {
  const [isOpen, setIsOpen] = useState(open);
  const [dataSubmit, setDataSubmit] = useState<CREATE_DATA>({
    title: '',
    author: '',
    name: '',
    nationality: '',
    postDate: '',
    yearOfBirth: ''
  })

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setDataSubmit(prev => ({ ...prev, [target.name]: target.value }))
  }, [])

  const validateInput = [
    sourceTitle && !dataSubmit[sourceTitle],
    sourceContent && !dataSubmit[sourceContent],
    sourceDate && !dataSubmit[sourceDate]
  ].some(item => item);
  const requiredInput = required(inputRequiredMessage);

  const dispatchHandler = useCallback((data: SetStateAction<CREATE_DATA>) => { 
    setDataSubmit(data)
  }, []);

  const inputsGroup = (
    <>
      <TextField
          onChange={changeHandler}
          validate={requiredInput}
          inputType={inputTypes.textInput}
          source={sourceTitle || ''}
          fullWidth
          variant={inputTypes.variant}
        />
        <TextField
          onChange={changeHandler}
          validate={requiredInput}
          inputType={inputTypes.textInput}
          source={sourceContent || ''}
          fullWidth
          variant={inputTypes.variant}
        />
        <TextField
          onChange={changeHandler}
          validate={requiredInput}
          inputType={inputTypes.dateInput}
          source={sourceDate || ''}
          fullWidth
          variant={inputTypes.variant}
        />
    </>
  )
  

  const edit = (
    <Edit
      title={<Title intialText={updatedText || updateMessagesTitle} />}
      sx={customStylesform()}
    >
      <SimpleForm
        mode={mode}
        reValidateMode={reValidateMode}
        toolbar={
          <CustomToolbar
            disabled={validateInput}
            resourcePath={sourcePathValue || BOOKS}
            type={toolbarTypes.update}
            saveText={buttonSaveText}
            deleteText={buttonDeleteText}
            dispatchHandler={dispatchHandler}
            sourceTitle={sourceTitle}
            sourceContent={sourceContent}
            sourceDate={sourceDate}
          />
        }
      >
        { inputsGroup }
      </SimpleForm>
    </Edit>
  )

  const create = (
    <Create
      title={<Title intialText={createText || createDataTextDefault} />}
      sx={customStylesform()}
    >
      <SimpleForm
        mode={mode}
        reValidateMode={reValidateMode}
        toolbar={
          <CustomToolbar
            disabled={validateInput}
            resourcePath={sourcePathValue || BOOKS}
            type={toolbarTypes.create}
            saveText={buttonSaveText}
          />
        }
      >
        { inputsGroup }
      </SimpleForm>
    </Create>
  )

  const closeHandler = () => setIsOpen(false);
  return (
    <CustomModal open={isOpen}>
      <ModalChild>
        <CloseButton disableRipple name={name} label='' startIcon={<CloseIcon />} onClick={closeHandler} />
        {isCreate ? create : edit}
      </ModalChild>
    </CustomModal>
  )
}

export default Modal