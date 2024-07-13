export default function CoreConcept(props) {
    return (
        <li>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title} />
        </li>
    );
}