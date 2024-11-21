interface Props {
    source: string;
}


function Image ({ source }: Props) {
    const altText = source.split("/").pop()?.split(".")[0] || "";

    return (
        <figure>
            <img
                src = {source}
                alt = {altText}
            />
            <figcaption>{altText}</figcaption>
        </figure>
    )
}

export default Image;