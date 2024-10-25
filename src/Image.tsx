import './css/app.css';

interface Props {
    source: string;
    altText: string;
}


function Image ({ source, altText }: Props) {

    return (
        <>
            <img className="react-image" src = {source} alt = {altText}/>
        </>
    )
}

export default Image;