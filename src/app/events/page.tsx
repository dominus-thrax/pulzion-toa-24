import React from 'react';
import EventCard from '../../components/ui/EventCard';
import EventBanner from '@/components/ui/EventBanner';
import Ellipse from '@/components/ui/Ellipse';
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
            <div className="relative w-full flex justify-center items-center mb-8"
                 style={{ 
                        marginBottom: '-25px',
                        marginTop:"30px" 
                }}
                >
                {/* Left Ellipse */}
                <div className="absolute left-0"
                style={{
                    left:"-30px",
                    marginBottom:"800px",
                    
                }}>
                    <Ellipse dynamicContent="&lt;" />
                </div>

                {/* Event Banners */}
                <div className="grid grid-cols-2 gap-6 max-w-4xl" 
                    style={{ 
                        marginBottom: "-350px",
                        marginRight:"250px",
                     }}>
                    <EventBanner title="TECHNICAL EVENTS" />
                    <EventBanner title="NON-TECHNICAL EVENTS" />
                </div>

                {/* Right Ellipse */}
                <div className="absolute right-0"
                style={{
                    marginBottom:"800px"
                }}>
                    <Ellipse dynamicContent="&gt;" />
                </div>
            </div>

            {/* Event Cards */}
            <div className="grid grid-cols-2 gap-6 max-w-4xl transform -translate-x-24">
                <EventCard title="Dataquest" quote="We are surrounded by data but starved for insight!" />
                <EventCard title="Dataquest" quote="We are surrounded by data but starved for insight!" />
                <EventCard title="Dataquest" quote="We are surrounded by data but starved for insight!" />
                <EventCard title="Dataquest" quote="We are surrounded by data but starved for insight!" />
                <EventCard title="Dataquest" quote="We are surrounded by data but starved for insight!" />
                <EventCard title="Dataquest" quote="We are surrounded by data but starved for insight!" />
            </div>
        </div>
    );
};

export default EventsPage;
