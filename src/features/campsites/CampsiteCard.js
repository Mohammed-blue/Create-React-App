import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle
    } from 'reactstrap';
    import { Link } from 'react-router-dom';

function CampsiteCard ({ campsite }) {
    // const { campsite } = props; This is one way to destructor props. the most preferred way is to add it in the function parameter
    const {id, image, name } = campsite; // destructured props.
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg
                width='100%'
                src={image}
                alt={name} />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
}

export default CampsiteCard;