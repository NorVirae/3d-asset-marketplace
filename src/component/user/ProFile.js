import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../api/auth";
import ProfileInput from "./ProfileInput";
import SocialMediaInput from "./SocialMediaInput";

const Profile = () => {
    const user = useSelector((state) => state.user);
    const [userDetails, setUserDetails] = useState({
      username: "",
      email: "",
      phone: "",
      description: "",
      dob: "",
      location: "",
    });
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (user && user.user) {
        setUserDetails((old) => ({
          ...old,
          username: user.user.name,
          email: user.user.email,
          phone: user.user.phone,
          description: user.user.description,
          birth_date: user.user.birth_date,
          picture: user.user.picture,
        }));
      }
    }, []);
    return (
      <section className="user__main-profile-container">
        <form className="user__main-profile-form">
          <ProfileInput
            onClick={(e) =>
              dispatch(
                updateUserAction({
                  updateData: userDetails,
                  accessToken: user && user.user ? user.user.access_token : "",
                })
              )
            }
            value={userDetails.username}
            onChange={(e) => {
              setUserDetails((old) => ({ ...old, username: e.target.value }));
            }}
            labelName={"USERNAME"}
          />
          <ProfileInput
            onClick={(e) =>
              dispatch(
                updateUserAction({
                  updateData: userDetails,
                  accessToken: user && user.user ? user.user.access_token : "",
                })
              )
            }
            value={userDetails.email}
            labelName={"EMAIL"}
          />
  
          <ProfileInput
            onClick={(e) =>
              dispatch(
                updateUserAction({
                  updateData: userDetails,
                  accessToken: user && user.user ? user.user.access_token : "",
                })
              )
            }
            onChange={(e) =>
              setUserDetails((old) => ({ ...old, username: e.target.value }))
            }
            labelName={"PHONE"}
          />
          <ProfileInput
            onClick={(e) =>
              dispatch(
                updateUserAction({
                  updateData: userDetails,
                  accessToken: user && user.user ? user.user.access_token : "",
                })
              )
            }
            value={userDetails.description}
            onChange={(e) =>
              setUserDetails((old) => ({ ...old, description: e.target.value }))
            }
            labelName={"BIO"}
          />
          <ProfileInput
            onClick={(e) =>
              dispatch(
                updateUserAction({
                  updateData: userDetails,
                  accessToken: user && user.user ? user.user.access_token : "",
                })
              )
            }
            type={"date"}
            value={userDetails.birth_date}
            onChange={(e) =>
              setUserDetails((old) => ({ ...old, birth_date: e.target.value }))
            }
            labelName={"DOB"}
          />
          <ProfileInput
            onClick={(e) =>
              dispatch(
                updateUserAction({
                  updateData: userDetails,
                  accessToken: user && user.user ? user.user.access_token : "",
                })
              )
            }
            value={userDetails.picture}
            onChange={(e) =>
              setUserDetails((old) => ({ ...old, picture: e.target.value }))
            }
            labelName={"PROFILE PICTURE"}
          />
          <SocialMediaInput
            onClick={(e) =>
              dispatch(
                updateUserAction({
                  updateData: userDetails,
                  accessToken: user && user.user ? user.user.access_token : "",
                })
              )
            }
            value={userDetails.picture}
            onChange={(e) =>
              setUserDetails((old) => ({ ...old, socialMedia: e.target.value }))
            }
            labelName={"SOCIAL MEDIA LINKS"}
          />
        </form>
      </section>
    );
  };

  export default Profile