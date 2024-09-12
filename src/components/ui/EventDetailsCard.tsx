"use client";

import React from "react";

interface EventDetailsCardProps {
    title: string;
    mode: string;
    price: string;
    rules: string;
    rounds: string;
    teamDistribution: string;
    eventLeads: { name: string; phone: string }[];
}

const EventDetailsCard: React.FC<EventDetailsCardProps> = ({
    title,
    mode,
    price,
    rules,
    rounds,
    teamDistribution,
    eventLeads,
}) => {
    return (
        <div
            className="relative flex flex-col items-center justify-center"
            style={{
                backgroundImage: "url('/images/cardbg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "1050px",
                height: "510px",
                top: "35px",
                left: "120px",
                position: "absolute",
                boxShadow: "0px 0px 20px rgba(0,0,0,0.5)",
                borderRadius: "48.51px",
                padding: "20px",
                opacity: 1,
            }}
        >
            {/* Top-left image container */}
            <div
                style={{
                    position: "absolute",
                    top: "50.5px",
                    left: "130.5px",
                    width: "170.89px",
                    height: "170.7px",
                    backgroundImage: "url('/images/OrangeEllipse.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    zIndex: 1,
                }}
            >
                <img
                    src="/images/BigCam.png"
                    alt="BigCam"
                    style={{
                        width: "137.17px",
                        height: "138.63px",
                        objectFit: "cover",
                    }}
                />
            </div>

            {/* Event title */}
            <h1
                className="font-WallpoetFont text-green-500 text-center"
                style={{
                    fontSize: title.length > 15 ? "45px" : title.length > 10 ? "70px" : "60px",
                    fontWeight: "400",
                    lineHeight: "88px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: "#27D342",
                    width: "100%",
                    marginTop: title.length > 15 ? "-200px" : title.length > 10 ? "-200px" : "-200px",
                    marginLeft: title.length > 15 ? "230px" : title.length > 10 ? "250px" : "45px",
                    marginBottom: title.length > 15 ? "-320px" : title.length > 10 ? "-270px" : "-10px",
                    overflowWrap: "break-word",
                }}
            >
                {title}
            </h1>

            {/* Mode */}
            <h3
                className="text-center font-WallpoetFont text-yellow-400 mt-2"
                style={{
                    fontSize: "25px",
                    fontWeight: "400",
                    lineHeight: "25.05px",
                    color: "#CF9C41",
                    marginLeft: title.length > 15 ? "-120px" : title.length > 10 ? "-130px" : "-10px",
                    marginTop: title.length > 15 ? "300px" : title.length > 10 ? "250px" : "-10px",
                }}
            >
                Mode: {mode}
            </h3>

            {/* Price - Fixed */}
            <div className="mt-6">
                <h4
                    className="text-green-500 text-xl font-WallpoetFont font-semibold"
                    style={{
                        color: "#27D342",
                        fontSize: "20px",
                        position: "absolute",
                        top: "230px",
                        left: title.length > 15 ? "140px" : title.length > 10 ? "130px" : "170px",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                    }}
                >
                    Price:
                </h4>
                <p
                    className="text-yellow-400 text-lg font-diary"
                    style={{
                        color: "#CFC36D",
                        fontSize: "20px",
                        position: "absolute",
                        top: "233px",
                        left: title.length > 15 ? "180px" : title.length > 10 ? "170px" : "210px",
                    }}
                >
                    {price}
                </p>
            </div>

            {/* Scrollable Content - Rules, Rounds, Team Distribution */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr", // Single column layout
                    gap: "20px",
                    justifyContent: "start",
                    width: "60%",
                    marginLeft: "400px", // Align scrollable content
                    height: "350px", // Fixed height for scrollable area
                    overflowY: "auto", // Enable vertical scrolling
                    marginBottom:"-180px",
                    scrollbarWidth:"thin",
                    scrollbarColor:"#A9A9A9 transparent",
                    
                }}
            >
                {/* Rules */}
                <div>
                    <h4
                        className="text-green-500 text-xl font-WallpoetFont font-semibold"
                        style={{ color: "#27D342", marginBottom: "0.3px" }}
                    >
                        Rules:
                    </h4>
                    <p
                        className="text-yellow-400 text-base px-6 font-diary"
                        style={{
                            whiteSpace: "pre-line",
                            color: "#CFC36D",
                            overflowWrap: "break-word",
                            textAlign: "left", // Left align the text content
                            maxWidth: "500px",
                            marginLeft: "-23px",
                            margin: 0,
                        }}
                    >
                        {rules}
                    </p>
                </div>

                {/* Rounds */}
                <div>
                    <h4
                        className="text-green-500 text-xl font-WallpoetFont font-semibold"
                        style={{ color: "#27D342", marginBottom: "0.3px"  }}
                    >
                        Rounds:
                    </h4>
                    <p
                        className="text-yellow-400 text-base font-diary"
                        style={{
                            whiteSpace: "pre-line",
                            color: "#CFC36D",
                            overflowWrap: "break-word",
                            textAlign: "left",
                            maxWidth: "500px",
                        }}
                    >
                        {rounds}
                    </p>
                </div>

                {/* Team Distribution */}
                <div>
                    <h4
                        className="text-green-500 text-xl font-WallpoetFont font-semibold"
                        style={{ color: "#27D342", marginBottom: "0.1px" }}
                    >
                        Team Distribution:
                    </h4>
                    <p
                        className="text-yellow-400 text-base font-diary"
                        style={{
                            whiteSpace: "pre-line",
                            color: "#CFC36D",
                            overflowWrap: "break-word",
                            textAlign: "left",
                            maxWidth: "500px",
                        }}
                    >
                        {teamDistribution}
                    </p>
                </div>
            </div>

            {/* Event Leads - Fixed */}
            <div style={{ position: "absolute", bottom: "20px", right: "20px" }}>
                <h4
                    className="text-green-500 text-xl font-WallpoetFont font-semibold"
                    style={{ 
                        color: "#27D342", 
                        marginBottom: "10px",
                        fontSize:"20px",
                    }}
                >
                    Event Leads:
                </h4>
                <div style={{ marginTop: "-10px", marginRight: "705px", marginBottom: "150px" }}>
                    {eventLeads.map((lead, index) => (
                        <div key={index} className="text-yellow-400 text-base font-diary mb-1">
                            <p style={{ color: "#CFC36D", marginBottom: "-5px" }}>
                                {lead.name} - {lead.phone}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div
                className="mt-6 flex flex-col items-center"
                style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    top: "335px",
                    transform: "translateX(-50%)",
                }}
            >
                <button
                    className="font-bold font-vt323 py-2 px-4 rounded mb-2"
                    style={{
                        backgroundColor: "#00910E",
                        height: "40px",
                        width: "264px",
                        fontSize: "36px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "600px",
                    }}
                >
                    Add to Cart
                    <img
                        src="/images/ShoppingCart.png"
                        alt="Cart"
                        style={{ width: "30px", height: "30px", marginLeft: "10px" }}
                    />
                </button>

                <button
                    className="font-bold font-vt323 py-2 px-4 rounded"
                    style={{
                        backgroundColor: "#00910E",
                        height: "40px",
                        width: "264px",
                        fontSize: "36px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "600px",
                    }}
                >
                    Favourite
                    <img
                        src="/images/Heart.png"
                        alt="Heart"
                        style={{ width: "30px", height: "30px", marginLeft: "10px" }}
                    />
                </button>
            </div>
        </div>
    );
};

export default EventDetailsCard;
