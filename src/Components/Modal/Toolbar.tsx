import { DeleteButton, SaveButton, Toolbar, useCreate, useDelete, useNotify, useRedirect, useUpdate } from "react-admin";
import { saveButtonCustomStyles, toolbarCustomStyles, updateButtonCustomStyles } from "./styles";
import { useFormContext } from 'react-hook-form'
import { FormEvent, SetStateAction, useEffect } from 'react';
import { CREATE_DATA } from "../../Interface/states";

interface Props {
    saveText?: string,
    deleteText?: string,
    createNotifyText?: string,
    updateNotifyText?: string,
    deleteNotifyText?: string,
    resourcePath: 'books' | 'authors',
    type: 'create' | 'update',
    disabled?: boolean,
    dispatchHandler?: (data: SetStateAction<CREATE_DATA>) => void,
    sourceTitle?: 'title' | 'name',
    sourceContent?: 'author' | 'nationality',
    sourceDate?: 'postDate' | 'yearOfBirth',
}

export const CustomToolbar = ({
    saveText,
    deleteText,
    type,
    createNotifyText,
    updateNotifyText,
    resourcePath,
    disabled,
    dispatchHandler,
    sourceTitle,
    sourceContent,
    sourceDate
}: Props) => {
    const notify = useNotify();
    const [update] = useUpdate();
    const [create] = useCreate();
    const { getValues } = useFormContext();
    const redirect = useRedirect();

    const { id, ...data } = getValues();
    useEffect(() => {
        if (dispatchHandler && sourceTitle && sourceContent && sourceDate) {
            dispatchHandler(prev => ({
                ...prev,
                [sourceTitle]: data[sourceTitle],
                [sourceContent]: data[sourceContent],
                [sourceDate]: data[sourceDate],
            }))
        }
    }, [id])

    const submitHandler = (event: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
        event.preventDefault();
        if (type === 'update') {
            return update(
                resourcePath,
                { id, data },
                { onSuccess: () => { redirect(`/${resourcePath}`), notify(updateNotifyText || 'Elemento Editado');; } }
            );
        }
        create(
            resourcePath,
            { data },
            { onSuccess: () => { redirect(`/${resourcePath}`), notify(createNotifyText || 'Elemento Creado'); } }
        );

    };

    return (
        <Toolbar sx={toolbarCustomStyles()}>
            <SaveButton
                label={saveText}
                onClick={submitHandler}
                sx={saveButtonCustomStyles(type === 'create')}
                type="button"
                disabled={disabled}
            />
            <DeleteButton
                label={deleteText}
                sx={updateButtonCustomStyles()}
                type="button"
            />
        </Toolbar>
    )
};