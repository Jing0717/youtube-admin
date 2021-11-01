import { ArrowBackIosOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackIosOutlined />
                Home
            </div>
            <video
                className="video"
                autoPlay
                onProgress
                controls
                src="https://youtu.be/oumLyZkEFPw" />
        </div>
    )
}
