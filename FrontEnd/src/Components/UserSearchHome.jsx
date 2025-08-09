import React,{use, useState,useEffect} from "react";
import { useNavigate } from "react-router";

const FORM_STAGES = {
    NO_SEARCH:"nosearch",
    SEARCH:"search",
}


const UserSearchHome = ({userSearch}) => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [results,setResults] = useState([]);
    const [currentStage,setCurrentStage] = useState(FORM_STAGES.NO_SEARCH);
    
    const navigate = useNavigate();

    const handleSearch = async(e) => {
    
        e.preventDefault();
        if (!firstName.trim() && !lastName.trim()){
            alert("The First or Last Name is Required");
            return;
        }
        // const fullSearchInfo = {};
        if (!lastName.trim()){
            const fullSearchInfo = {
                first_name: firstName.trim(),
                last_name: "",
            }
            const searchResults = await userSearch(firstName.trim(),"");
            if (searchResults.length === 0){
                alert("User Not Found");
                return;
            }
            console.log("Here are the search results: ",searchResults);
            setResults(searchResults);

        }
        if (!firstName.trim()){
            // const fullSearchInfo = {
            //     first_name: "",
            //     last_name: lastName.trim(),
            // }
            const searchResults = await userSearch("",lastName.trim());
            if (searchResults.length === 0){
                alert("User Not Found");
                return;
            }
            console.log("Here are the search results: ",searchResults);
            setResults(searchResults);

        }
        else if (lastName.trim()){
            const fullSearchInfo = {
                first_name: firstName.trim(),
                last_name: lastName.trim(),
            }
            const searchResults = await userSearch(firstName.trim(),lastName.trim());
            if (searchResults.length === 0){
                alert("User Not Found");
                return;
            }
            console.log("Here are the search results: ",searchResults);
            setResults(searchResults);
        }
        console.log(results);
        setCurrentStage(FORM_STAGES.SEARCH);
        // const searchResults = await userSearch(fullSearchInfo);
        // console.log("Here are the search results: ",searchResults);
    }
    return (
        <>
        <div>
        <button onClick={(e) => navigate("/") } className="back-button">Back</button>
        <form onSubmit={handleSearch}>
        <div className="search-function-home">
            
        <input
        className="first-name-box"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />

        <input
        className="last-name-box"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className="search-name-home-search">🔍</button>
        </div>
        </form>
        {currentStage === FORM_STAGES.NO_SEARCH && (
        <div>
        <h1>Search Profiles</h1>
        </div>
        )}
        {currentStage === FORM_STAGES.SEARCH && (
        <div>
        {results.map((result) => (
            <li key={result.user_id} className="home-search-result-list">
            <button className="home-search-result-list-button"><p>{result.first_name} {result.last_name}</p></button>
            </li>
        ))}
        </div>
        )}
        </div>
        </>
    )
}

export default UserSearchHome;