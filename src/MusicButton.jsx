import { useRef, useState } from "react";

export default function MusicButton() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        if (!isPlaying) {
            audioRef.current.volume = 0.02; // set low volume
            audioRef.current.play().catch((err) => {
                console.log("Error playing:", err);
            });
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };


    return (
        <div style={{ position: "fixed", top: 20, right: 20, zIndex: 999 }}>
            <button
                onClick={toggleMusic}
                style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "24px",
                    color: "white",
                    opacity: 0.7,
                    transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
            >
                {isPlaying ? "🔇" : "🎵"}
            </button>


            <audio ref={audioRef} src="/website/bg-music.mp3" loop />
        </div>
    );
}
