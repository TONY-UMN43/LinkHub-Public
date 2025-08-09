import React,{useState} from "react";
import "./childComponents.css";
import { useNavigate } from "react-router";

const FORM_STAGES = {
    LESS_FIELD_OPTIONS: "lessfieldoptions",
    MORE_FIELD_OPTIONS: "morefieldoptions",

}

const HomeScreen = () => {
    
    const [currentStage,setCurrentStage] = useState(FORM_STAGES.LESS_FIELD_OPTIONS);
    const navigate = useNavigate();

    const handleJoinButton = (e) => {
        e.preventDefault();
        navigate("/register/");
    }

    const handleLoginButton = (e) => {
        e.preventDefault();
        navigate("/user/login/");
    }
    const handleMoreFields = (e) => {
        e.preventDefault();
        setCurrentStage(FORM_STAGES.MORE_FIELD_OPTIONS);

    }
    const handleLessFields = (e) => {
        e.preventDefault();
        setCurrentStage(FORM_STAGES.LESS_FIELD_OPTIONS);

    }

    const handleSearchUser = (e) => {
        e.preventDefault();
        navigate("/homepage/search/");
    }

    const handleMiniQuiz = (e) => {
        e.preventDefault();
        navigate("/homepage/mini-quiz/");
    }

    return (
        <>
        <div>
        <div>
        <h1 className="home-screen-top-header">Explore Jobs and <br/>Build Connections</h1>
        </div>
        <div>
        <h1 className="home-network-job-header">
        Network with your friends
        </h1>
        <form onSubmit={handleSearchUser}>
        <button className="home-network-job-button" type="submit">
        Find People You Know
        </button>
        </form>
        </div>
        <div>
        <h1 className="home-who-header">
        Who are You?
        </h1>
        <form onSubmit={handleMiniQuiz}>
        <button className="home-who-button">Take a Quiz</button>
        </form>
        {/* Add a dropdown menu with options: Student,Employee,Manager,Entreupenuer, etc.. */}

        </div>
        {currentStage === FORM_STAGES.LESS_FIELD_OPTIONS && (<form onSubmit={handleMoreFields}>
        
        <div>
        <h1 className="home-screen-field-header">Choose your field of interest</h1>
        <div className="home-career-button-container">
        <div>
        <button type="button" className="home-engineering-button" onClick={() => navigate("/homepage/engineering-info/")}>Engineering</button>
        </div>
        <button className="home-finance-button">Finance</button>
        <button className="home-finance-button">Software Engineering</button>
        <button className="home-hr-button">Human Resources</button>
        <button className="home-business-button">Business</button>
        <button className="home-marketing-button">Marketing</button>
        <button className="home-ai-button">Artificial Intelligence</button>
        <button className="home-show-more-fields-button" type="submit">Show More</button>
        </div>  
        </div>
        </form>
        )}
        {currentStage === FORM_STAGES.MORE_FIELD_OPTIONS && (<form onSubmit={handleLessFields}>
        
        <div>
        <h1 className="home-screen-field-header">Choose your field of interest</h1>
        <div className="home-career-button-container">
        <div>
        <button className="home-engineering-button" onClick={(e) => navigate("/homepage/engineering-info/")}>Engineering</button>
        </div>
        <button className="home-finance-button">Finance</button>
        <button className="home-finance-button">Software Engineering</button>
        <button className="home-hr-button">Human Resources</button>
        <button className="home-business-button">Business</button>
        <button className="home-marketing-button">Marketing</button>
        <button className="home-ai-button">Artificial Intelligence</button>
        <button className="home-ai-button">Customer Service</button>
        <button className="home-ai-button">Education</button>
        <button className="home-ai-button">Healthcare</button>
        <button className="home-ai-button">Legal</button>
        <button className="home-ai-button">Sales</button>
        <button className="home-ai-button">Consulting</button>
        <button className="home-show-more-fields-button" type="submit">Show Less</button>
        </div>  
        </div>
        </form>
        )}
        <div>
        <h1 className="home-post-job-header">
        Post your job for anyone to apply
        </h1>
        <button className="home-post-job-button">
        Post Job
        </button>
        </div>

        <div className="home-right-corner-button-container">
        <div>
        <button onClick={handleJoinButton} className="join-now-home-button">Join Now</button> 
        </div>
        <div>
        <button onClick={handleLoginButton} className="sign-in-home-button">Sign In</button> 
        </div>
        </div>
        </div>
        </>
    )
}

export default HomeScreen;