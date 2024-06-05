import React, { useState, useEffect } from "react";
import "./SearchBox.css";

const SearchBox = () => {
    // State for storing the input name
    const [name, setName] = useState("");
    // State for storing the predicted nationality
    const [predictedNationality, setPredictedNationality] = useState("");
    // State for storing the prediction probability
    const [probability, setProbability] = useState(null);
    // State for indicating if data is being loaded
    const [loading, setLoading] = useState(false);

    // Effect to fetch nationality whenever the name changes
    useEffect(() => {
        if (name) {
            fetchNationality();
        } else {
            // Reset the results when the name input is cleared
            setPredictedNationality("");
            setProbability(null);
        }
    }, [name]);

    // Function to fetch nationality data from the API
    const fetchNationality = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.nationalize.io/?name=${name}`);
            const data = await response.json();
            const predicted = data.country[0]?.country_id;
            const prob = data.country[0]?.probability;
            if (predicted) {
                // Update state with the prediction results
                setPredictedNationality(predicted);
                setProbability((prob * 100).toFixed(2));
            } else {
                throw new Error("Prediction not available");
            }
        } catch (error) {
            console.error("Error fetching nationality:", error);
            setPredictedNationality(null);
        } finally {
            setLoading(false);
        }
    };

    // Handler for input change to update the name state
    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    // Handler for reset button to clear the input and results
    const handleResetClick = () => {
        setName("");
        setPredictedNationality("");
        setProbability(null);
    };

    return (
        <div className="container">
            <h1 className="title">Milliyet Tahmincisi Uygulaması</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={name}
                    placeholder="Enter a name"
                    onChange={handleInputChange}
                    className="input-field"
                />
                <button onClick={handleResetClick} className="reset-btn">
                    Reset
                </button>
            </div>
            {loading && (
                <div className="loading-container">
                    <p className="text-xl font-bold">Loading...</p>
                </div>
            )}
            {!loading && predictedNationality === null && (
                // Display error message if prediction is not available
                <div className="error-message">
                    <p className="text-xl">
                        I'm sorry! I'm not able to predict the nationality for "{name}".
                    </p>
                </div>
            )}
            {!loading && predictedNationality && (
                // Display the prediction results
                <div className="prediction-container">
                    <p className="text-xl">
                        Predicted nationality for the name "{name}":{" "}
                        <span className="font-bold">{predictedNationality}</span>
                    </p>
                    {probability && (
                        <p className="text-xl">
                            Prediction confidence:{" "}
                            <span className="font-bold">{probability}%</span>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBox;
