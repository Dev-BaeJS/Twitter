import { authService } from "fbase";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const history = useNavigate();

    const onLogOutClick = () => {
        authService.signOut();
        history("/");
    };

    return(
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};

export default Profile;

// "react-router-dom" -v === useHistory -> useNavigate 관련
// https://nakanara.tistory.com/291?category=1020032