import React,{useState} from "react";
import { useNavigate } from "react-router";
import "./childComponents.css"

const FORM_STAGES = {
    FULL_NAME:"fullname",
    BIO:"bio",
    LOCATION:"location"
}

const UserProfileRegistration = ({createProfile}) => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [bio,setBio] = useState('');
    const [country,setCountry] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [currentStage,setCurrentStage] = useState(FORM_STAGES.FULL_NAME);

    const navigate = useNavigate();

    const handleNameNextButton = async(e) => {
        e.preventDefault();
        if (!firstName.trim()){
            alert("First Name is Required");
            return;
        }
        if (!lastName.trim()){
            alert("Last Name is Required");
            return;
        }
        setCurrentStage(FORM_STAGES.BIO);
    }

    const handleSelectedCountry = (e) => {
        // e.preventDefault();
        const value = e.target.value;
        setCountry(value);
        // if (selected === ''){
        //     alert("The Company Type is required");
        //     return;
        // }
    }


    const handleSelectedState = (e) => {
        // e.preventDefault();
        const value = e.target.value;
        setState(value);
        // if (selected === ''){
        //     alert("The Company Type is required");
        //     return;
        // }
    }


    const handleBioNextButton = async(e) => {
        e.preventDefault();
        setCurrentStage(FORM_STAGES.LOCATION);
    }
    const handleCreateButton = async(e) => {
        e.preventDefault();
        const profile_data = {
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            bio: bio.trim(),
            location_city: city.trim(),
            location_country: country.trim(),
            location_state: state.trim(),
        }
        const response = await createProfile(profile_data);
        console.log("Sucessfully signed in");
        navigate("/home/");
    }

    return (
        <>
        <div>
        {currentStage=== FORM_STAGES.FULL_NAME && (<form onSubmit={handleNameNextButton}>
        <div>
        <input
        className="first-name-registration-box"
        type="text"
        placeholder="Enter First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
        </div>
        <div>
        <input
        className="last-name-registration-box"
        type="text"
        placeholder="Enter Last Name"
        value={lastName}
        onChange={(e)=> setLastName(e.target.value)}
        />
        </div>
        <div>
        <button className="next-button-">Next</button>
        </div>
        </form>
        )}
        {currentStage=== FORM_STAGES.BIO && (<form onSubmit={handleBioNextButton}>
        <div>
        <textarea
        className="bio-registration-box"
        type="text"
        placeholder="(Optional) Enter Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        />
        </div>
        {/* <div>
        <input
        className="last-name-registration-box"
        type="text"
        placeholder="Enter Last Name"
        value={lastName}
        onChange={(e)=> setLastName(e.target.value)}
        />
        </div> */}
        <div>
        <button className="next-bio-button">Next</button>
        </div>
        </form>
        )}
        {currentStage=== FORM_STAGES.LOCATION && (<form onSubmit={handleCreateButton}>
        <div className="location-register-container">

        <label>Location: </label>
        <select id="options" value={country} onChange={(e) => handleSelectedCountry(e)}>
        <option value="" disabled>--Select Country--</option>
        <option value="United States">United States</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Canada">Canada</option>
        <option value="Mexico">Mexico</option>
        </select>
        {country === "United States" && (
            <div>
                <select id="options" value={state} onChange={(e) => handleSelectedState(e)}>
                <option value="" disabled>--Select State--</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New-Hampshire">New Hampshire</option>
                <option value="New-Jersey">New Jersey</option>
                <option value="New-Mexico">New Mexico</option>
                <option value="New-York">New York</option>
                <option value="North-Carolina">North Carolina</option>
                <option value="North-Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode-Island">Rhode Island</option>
                <option value="South-Carolina">South Carolina</option>
                <option value="South-Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West-Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
                </select>
            </div>
        )}
        </div>
        {/* <div>
        <input
        className="last-name-registration-box"
        type="text"
        placeholder="Enter Last Name"
        value={lastName}
        onChange={(e)=> setLastName(e.target.value)}
        />
        </div> */}
        <div>
        <button className="create-profile-button">Create Profile</button>
        </div>
        </form>
        )}
        </div>
        </>
    )
}

export default UserProfileRegistration;