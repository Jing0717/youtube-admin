import "./widgetSm.css";
import { Visibility } from "@mui/icons-material"
import { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axiosInstance.get("/users?new=true", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODBkZDFiZGJiZGY3ZmFmNjZiNTYyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTkyODExNiwiZXhwIjoxNjM2MzYwMTE2fQ.5rPDS7LDOF4Fh6bltQWDX_TpB5Sw7Bwi2eDKR2GPHIA"
                    }
                });
                setNewUsers(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        getNewUsers()
    }, []);

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map((user) => (
                    <li className="widgetSmListItem">
                        <img src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="widgetSm"
                            className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                            <span className="widgetSmUserTitle">Software Engineer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgerSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
