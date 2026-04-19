

const ProductCard = ({product}) => {
    const {title ,author,content,id}=product;
    return (
        <div>
            <div className="card w-96 bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{content}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">{author}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;