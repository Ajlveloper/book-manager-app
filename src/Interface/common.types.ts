import { TypographyProps, StackProps } from "@mui/material"
import { CREATE_DATA } from "./states"

export interface NAME_RESOURCES_TYPES_COMMON {
    books: 'books',
    authors: 'authors',
}

interface ALIGN_ITEMS {
    center: 'center'
}

interface STACK_DIRECTION {
    row: "row" | "row-reverse",
    column: "column" | "column-reverse"
}

interface FLEX_WRAP_COMMON {
    wrap: "wrap",
    nowrap: 'nowrap'
}

interface STACK_POPS {
    direction: STACK_DIRECTION,
    alignItems: ALIGN_ITEMS
}

export interface MUI_COMPONENTS_PROPS_COMMON {
    stack: STACK_POPS,
    typographyBody1: TypographyProps['variant']
    justifyContentCenter: StackProps['justifyContent'],
    flexWrap: FLEX_WRAP_COMMON,
    typographyH5: TypographyProps['variant']
}

interface TOOLBAR_TYPES {
    update: 'create' | 'update',
    create: 'create' | 'update',
}

interface INPUT_TYPES extends CREATE_DATA  {
    textInput: 'text' | 'date',
    dateInput: 'text' | 'date',
    variant: 'outlined' | 'filled' | 'standard'
}

export interface FORM_CONFIGURATIO_COMMON {
    mode?: 'onBlur' | 'onChange' | 'all' | 'onTouched' | 'onSubmit',
    reValidateMode?: 'onBlur' | 'onChange' | 'onSubmit',
    toolbarTypes: TOOLBAR_TYPES,
    inputTypes: INPUT_TYPES
}

type SOURCE_TITLE = 'title' | 'name';
type SOURCE_CONTENT = 'author' | 'nationality';
type SOURCE_DATE = 'postDate' | 'yearOfBirth';

export interface SOURCE_TYPES_COMMON {
    title: SOURCE_TITLE,
    name: SOURCE_TITLE,
    author: SOURCE_CONTENT,
    nationality: SOURCE_CONTENT,
    postDate: SOURCE_DATE,
    yearOfBirth: SOURCE_DATE,
}

