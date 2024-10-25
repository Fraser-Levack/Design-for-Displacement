import "../css/App.css";

interface Props {
    children: string;
    isSubheading?: boolean;
    isActive?: boolean;
}

function MainHeading({children, isSubheading, isActive}: Props) {
    const activeClass = isActive ? "-active" : "";

    if (isSubheading) {
        return <h2 className={`heading subheading${activeClass} `}>{children}</h2>;
    } else {
        return <h1 className={`heading${activeClass} `}>{children}</h1>;
    }
}

export default MainHeading;