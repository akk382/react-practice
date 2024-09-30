const ShimmerUI = () => {
    return (
        <div className='restaurant-list'>
            {Array(10).fill("").map(
                (_, index) => (<div key={index} className="shimmer-ui"></div>)
            )}
        </div>
    );
}

export default ShimmerUI;