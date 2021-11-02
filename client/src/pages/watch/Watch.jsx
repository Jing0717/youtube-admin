import { ArrowBackIosOutlined } from "@material-ui/icons";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
    const location = useLocation();
    console.log(location)
    const movie = location.movie;
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackIosOutlined />
                    Home
                </div>
            </Link>
            <video
                className="video"
                autoPlay
                onProgress
                controls
                src={movie.video} />
        </div>
    )
}
