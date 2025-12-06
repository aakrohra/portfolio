import './ArtGallery.css';

const media = import.meta.glob('/src/assets/art/*.{jpg,jpeg,png,mp4}', { eager: true });

function ArtGallery() {
    return (
        <div className="art-gallery">
            {Object.entries(media).map(([path, file], idx) => {
                const src = file.default ?? file;
                const ext = path.split('.').pop().toLowerCase();
                const isVideo = ['mp4'].includes(ext);

                return (
                    <div className="art-item" key={idx}>
                        {isVideo ? (
                            <div className="video-wrapper">
                                <video
                                    src={src}
                                    muted
                                    loop
                                    playsInline
                                    width="1"
                                    height="1"
                                    onMouseEnter={e => e.target.play()}
                                    onMouseLeave={e => e.target.pause()} 
                                    alt={`Art ${idx + 1}`}
                               
                                />
                                <div className="play-icon">▶</div>
                            </div>
                        ) : (
                            <img
                                src={src}
                                width="1"
                                height="1"
                                alt={`Art ${idx + 1}`}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default ArtGallery;