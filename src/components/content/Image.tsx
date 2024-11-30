import "../../css/content/Image.css";

interface Props {
    source: string;
    figcaption?: boolean;
}


function Image ({ source, figcaption=true }: Props) {
    const altText = source.split("/").pop()?.split(".")[0]?.replace(/_/g, " ") || "";

    const imageHeight = "30rem";
    const imageStyle = { height: imageHeight };

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