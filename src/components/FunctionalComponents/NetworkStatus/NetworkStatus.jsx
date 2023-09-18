export const NetworkStatus = ({
    status,
    imageUrl,
    name,
    surName,
    imageWidth,
    imageHeight,
}) => {
    return (
        <section className="NetworkStatus-container">
            <img
                src={imageUrl}
                alt={`${name} ${surName}`}
                width={imageWidth}
                height={imageHeight}
            />
            <span
                className={`${
                    status ? "online" : "offline"
                } NetworkStatus`}></span>
        </section>
    );
};
