export default function Product(props) {


    const {title,descr,imageURL,ownerImage} = props
    return (
        <div className="product-card">
            < img
                src={imageURL}
                alt="Product"
                height={120}
                width={120} />
            <div>
                <div className="info-group">

                    <h3>{title}</h3>
                    <p>{descr}</p>

                </div>

            </div>
            <div className="info-group">
                <span>Submitted By:</span>
                < img
                    src={ownerImage}
                    alt="owner"
                    height={30}
                    width={30} />
            </div>



        </div>
    )
}