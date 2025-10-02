import './ArtGallery.css';

const images = import.meta.glob('/src/assets/art/*.{jpg,jpeg,png}', { eager: true });

function ArtGallery() {
    return (
        <div className="art-gallery">
            {Object.values(images).map((img, idx) => (
                <div className="art-item" key={idx}>
                    <img src={img.default ?? img} width="1" height="1" alt={`Art ${idx + 1}`} />
                </div>
            ))}
        </div>
    );
}

export default ArtGallery;