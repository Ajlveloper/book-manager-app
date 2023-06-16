import { useRecordContext } from "react-admin";

interface Props {
    intialText?:string,
}

const Title = ({ intialText }:Props) => {
    const record = useRecordContext()
    const hasText = record?.title || record?.name
    return (
        <span>{intialText} {`${hasText ? hasText : '' }`}</span>
    );
};

export default Title;