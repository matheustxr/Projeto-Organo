import './Banner.css'

interface BannerProps {
    url: string;
    alt?: string;
}

function Banner( { url, alt } :BannerProps) {
    return(
        <header className="banner">
            <img src={url} alt={alt} />
        </header>
    )
}

export default Banner