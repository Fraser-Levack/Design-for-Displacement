import "../../css/content/Image.css";

interface Props {
    source: string;
    figcaption?: boolean;
    size?: string;
}


function Image ({ source, figcaption=true , size = "30rem"}: Props) {
    const altText = source.split("/").pop()?.split(".")[0]?.replace(/_/g, " ") || "";

    const imageStyle = { height: size };

    return (
        <figure>
            <img
                src = {source}
                alt = {altText}
                style = {imageStyle}
            />
            {figcaption ? <figcaption>Fig. {altText}</figcaption> : null}
        </figure>
    )
}

export default Image;