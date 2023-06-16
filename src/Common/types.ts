import {
  FORM_CONFIGURATIO_COMMON,
  MUI_COMPONENTS_PROPS_COMMON,
  NAME_RESOURCES_TYPES_COMMON,
  SOURCE_TYPES_COMMON,
} from "../Interface/common.types";

const NAME_RESOURCES_TYPES: NAME_RESOURCES_TYPES_COMMON = {
  books: "books",
  authors: "authors",
};

const MUI_COMPONENTS_PROPS: MUI_COMPONENTS_PROPS_COMMON = {
  stack: {
    direction: {
      row: "row",
      column: "column",
    },
    alignItems: {
      center: "center",
    },
  },
  typographyBody1: "body1",
  justifyContentCenter: "center",
  flexWrap: {
    wrap: "wrap",
    nowrap: "nowrap",
  },
  typographyH5: "h5",
};

const CONFIGURATION_FORM: FORM_CONFIGURATIO_COMMON = {
  reValidateMode: "onBlur",
  mode: "all",
  toolbarTypes: {
    create: "create",
    update: "update",
  },
  inputTypes: {
    dateInput: "date",
    textInput: "text",
    title: "title",
    author: "author",
    postDate: "postDate",
    variant: "outlined",
  },
};

const SOURCES_TYPES:SOURCE_TYPES_COMMON = {
  title: 'title',
  name: 'name',
  author: 'author',
  nationality: 'nationality',
  postDate: 'postDate',
  yearOfBirth: 'yearOfBirth'  
}

export {
  NAME_RESOURCES_TYPES,
  MUI_COMPONENTS_PROPS,
  CONFIGURATION_FORM,
  SOURCES_TYPES,
};
