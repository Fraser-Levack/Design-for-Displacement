import "../../css/content/Image.css";

interface Props {
    source?: string;
    figcaption?: boolean;
    size?: string;
    lightText?: boolean;
}


function Image ({ source, figcaption=true , size = "30rem", lightText=false }: Props) {
    const altText = source.split("/").pop()?.split(".")[0]?.replace(/_/g, " ") || "";

    const imageStyle = { height: size };
    const lightTextStyle = { color: "var(--secondary-color)" };

    return (
        <figure>
            <img
                src = {source}
                alt = {altText}
                style = {imageStyle}
            />
            {figcaption ? <figcaption style={lightText ? lightTextStyle : {}}>Fig. {altText}</figcaption> : null}
        </figure>
    )
}

export default Image;