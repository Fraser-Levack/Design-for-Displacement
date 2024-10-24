import "./css/App.css";

interface Props {
    children: string;
    isSubheading?: boolean;
}

function MainHeading({children, isSubheading}: Props) {

    if (isSubheading) {
        return <h2 className="heading subheading">{children}</h2>;
    } else {
        return <h1 className="heading">{children}</h1>;
    }
}

export default MainHeading;