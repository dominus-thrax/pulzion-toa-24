import React from 'react';
import EventCard from '../../components/ui/EventCard';
import EventBanner from '@/components/ui/EventBanner';
//import Ellipse from '@/components/ui/Ellipse';
import '../globals.css';

const EventsPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1
                className="text-4xl font-diary font-bold mb-8 text-white"
                style={{
                    marginTop: "50px",
                    fontSize: "75px",
                    color: "#CFC36D"
                }}
            >
                EVENTS
            </h1>

            {/* Container for the banners and ellipses */}
            <div
                className="relative w-full flex justify-center items-center mb-16"
                style={{
                    marginBottom: '25px',
                    marginTop: '30px'
                }}
            >
                {/* Left Ellipse
                <div
                    className="absolute"
                    style={{
                        left: '-20px', // Adjusted for alignment
                        top: '-191%', // Center vertically
                        transform: 'translateY(-50%)'
                    }}
                >
                    <Ellipse dynamicContent="&lt;" />
                </div> */}

                {/* Event Banners */}
                <div
                    className="grid grid-cols-2 gap-20 max-w-4xl"
                    style={{
                        marginBottom: '0px',
                        marginRight: '120px',
                    }}
                >
                    <div style={{ marginRight: '50px', position: 'relative', left: '-20px' }}> {/* Space between the two banners */}
                        <EventBanner title="TECHNICAL EVENTS" />
                    </div>
                    <div style={{ marginLeft: '25px' }}> {/* Space between the two banners */}
                        <EventBanner title="NON-TECHNICAL EVENTS" />
                    </div>
                </div>


                {/* Right Ellipse
                <div
                    className="absolute"
                    style={{
                        right: '20px', // Adjusted for alignment
                        top: '-191%', // Center vertically
                        transform: 'translateY(-50%)'
                    }}
                >
                    <Ellipse dynamicContent="&gt;" />
                </div> */}
            </div>

            {/* Event Cards */}
            <div
                className="flex max-w-5xl"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '50px'
                }}
            >
                {/* Column 1 with 6 cards */}
                <div
                    className="flex flex-col gap-10"
                    style={{
                        marginTop: '0px',
                        marginRight: '100px',
                    }}
                >
                    <EventCard title="Codex" quote="Where Beginners become Champions!" />
                    <EventCard title="Codelicious" quote="Code surrounds, challenge drives—rise and excel" />
                    <EventCard title="Compute and Compete" quote="Feel the thrill of competitive coding!"/>
                    <EventCard title="Dataquest" quote="Embark on a Journey to Data Mastery!" />
                    <EventCard title="WebNApp" quote="Transform Ideas into Digital Masterpieces!" />
                    <EventCard title="Electroquest" quote="Get Ready to Dive into the Circuit Adventure!" />
                </div>

                {/* Column 2 with 6 cards */}
                <div
                    className="flex flex-col gap-10"
                    style={{
                        marginTop: '0px'
                    }}
                >
                    <EventCard title="Hire Hustle" quote="Prove Your Edge in the Ultimate Hiring Test" />
                    <EventCard title="Dextrous" quote="Shape your Future with a Thrilling Test of Skills!" />
                    <EventCard title="Fandom" quote="Think you're a true Fan? Put it to the Test!" />
                    <EventCard title="Insight" quote="Let your Words Sparkle and Shine!" />
                    <EventCard title="Freeze the Second" quote="Snap the Magic and Shine with your Unique Shots!" />
                    <EventCard title="Paper Presentation" quote="Showcase your Research and Ignite Curiosity!" />
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
