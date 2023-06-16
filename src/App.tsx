
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';
import { Modal } from './Components';
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { AppBarLayout, BooksLayouts } from './Layouts';
import { darkTheme, lightTheme } from './config/theme';
import { NAME_RESOURCES_TYPES, SOURCES_TYPES, authorCreateMessage, authorNameMessage } from './Common';

const {
    books,
    authors
} = NAME_RESOURCES_TYPES;


export const App = () => {
    return (
        <Admin
            dataProvider={dataProvider}
            title='Book Manager App'
            layout={AppBarLayout}
            darkTheme={darkTheme}
            lightTheme={lightTheme}
            defaultTheme='light'
        >
            <Resource
                name={books}
                list={BooksLayouts}
                create={() => (
                    <Modal
                        isCreate
                        open
                        name={books}
                        sourceTitle={SOURCES_TYPES.title}
                        sourceContent={SOURCES_TYPES.author}
                        sourceDate={SOURCES_TYPES.postDate}
                    />
                )}
                edit={() => (
                    <Modal
                        isCreate={false}
                        open
                        name={books}
                        sourceTitle={SOURCES_TYPES.title}
                        sourceContent={SOURCES_TYPES.author}
                        sourceDate={SOURCES_TYPES.postDate}
                    />
                )}
                icon={PostIcon}
            />
            <Resource
                name={authors}
                list={BooksLayouts}
                create={() => (
                    <Modal
                        isCreate
                        open
                        name={authors}
                        sourceTitle={SOURCES_TYPES.name}
                        sourceContent={SOURCES_TYPES.nationality}
                        sourceDate={SOURCES_TYPES.yearOfBirth}
                        sourcePathValue={authors}
                        createText={authorCreateMessage}
                    />
                )}
                edit={() => (
                    <Modal
                        sourceTitle={SOURCES_TYPES.name}
                        sourceContent={SOURCES_TYPES.nationality}
                        sourceDate={SOURCES_TYPES.yearOfBirth}
                        isCreate={false}
                        open
                        name={authors}
                        sourcePathValue={authors}
                        updatedText={authorNameMessage}
                    />
                    )
                }
                icon={UserIcon}
            />
        </Admin>
    )
};

