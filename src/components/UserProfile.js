import React, { useState, useEffect } from "react";
import "../assets/styles/Profile.css";
import CheckIcon from "@material-ui/icons/CheckCircleOutline";
import CancelIcon from "@material-ui/icons/Cancel";
import Link from "@material-ui/core/Link";
import "./userArray";

const userArray = [
  {
    id: 1,
    name: "Hridoy Ahmed",
    email: "hridoy@orangetoolz.com",
    number: "01823820953",
    address: "Jamalpur",
    image:
      "https://htmlstream.com/preview/unify-v2.6.3/assets/img-temp/400x450/img5.jpg",
  },
  {
    id: 2,
    name: "Tanvir",
    email: "tanvir@orangetoolz.com",
    number: "01515145155",
    address: "Chittagong",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: 3,
    name: "Masud Rana",
    email: "masudrana@orangetoolz.com",
    number: "01654546494",
    address: "Dhaka",
    image:
      "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
  },
];

export default function UserProfile() {
  let userInitialValue = {
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
  };
  const [user, setUser] = useState(userInitialValue);
  const handleCheckIcon = () => {
    console.log("Button Clicked");
  };
  const handleCancelIcon = () => {};

  const handleUser = (name, value) => {
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setUser((prevState) => ({
      ...prevState,
      name: userArray.name,
      email: userArray.nameemail,
      phone: userArray.phone,
      address: userArray.address,
      image: userArray.image,
    }));
  }, []);
  const [state, setState] = useState({
    name: "John Doe",
    email: "john.doe@test.com",
  });

  // We need to spread the previous state and change the one we're targeting, so other data cannot be lost.
  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="App">
        <h1>User Profile</h1>
      </div>
      {userArray.map((user) => (
        <div class="flex-container">
          <div className="profile__section">
            {/* <UserIcon
            style={{
              fontSize: 100,
              justifyContent: "center",
              textAlign: "center",
            }}
          /> */}
            <img src={user.image} alt="Logo" />
          </div>
          <div className="details__section">
            <div>
              <label className="label" for="name">
                Name:
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleUser}
                placeholder="Enter your name"
              />

              <Link href="#" onClick={handleCheckIcon}>
                <CheckIcon style={{ paddingLeft: 20, paddingRight: 20 }} />
              </Link>
              <Link href="#" onClick={handleCancelIcon}>
                <CancelIcon />
              </Link>
            </div>
            <div>
              <label className="label" for="email">
                Email:
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleUser}
                placeholder="Enter your Email"
              />
              <Link href="#" onClick={handleCheckIcon}>
                <CheckIcon style={{ paddingLeft: 20, paddingRight: 20 }} />
              </Link>
              <Link href="#" onClick={handleCancelIcon}>
                <CancelIcon />
              </Link>
            </div>
            <div>
              <label className="label" for="number">
                Number:
              </label>
              <br />
              <input
                type="text"
                id="number"
                name="number"
                value={user.number}
                onChange={handleUser}
                placeholder="Enter your Phone"
              />
              <Link href="#" onClick={handleCheckIcon}>
                <CheckIcon style={{ paddingLeft: 20, paddingRight: 20 }} />
              </Link>
              <Link href="#" onClick={handleCancelIcon}>
                <CancelIcon />
              </Link>
            </div>
            <div>
              <label className="label" for="address">
                Address:
              </label>
              <br />
              <input
                type="text"
                id="address"
                name="address"
                value={user.address}
                onChange={handleUser}
                placeholder="Enter your address"
              />
              <Link href="#" onClick={handleCheckIcon}>
                <CheckIcon style={{ paddingLeft: 20, paddingRight: 20 }} />
              </Link>
              <Link href="#" onClick={handleCancelIcon}>
                <CancelIcon />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
