
interface Props {
    children: string;
}

function Message({children}: Props) {

    if (children) {
        return <h1> Hello {children} </h1>;
    }
    return <h1> Hello World </h1>;
}

export default Message;