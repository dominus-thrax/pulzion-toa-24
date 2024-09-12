"use client";
import { useParams } from "next/navigation";
import React from "react";
import EventDetailsCard from "@/components/events/event-details-card";

const EventDetailsPage = () => {
  const params = useParams();
  const title = params.title;

  // Predefined event details
  const eventDetails = {
    codex: {
      mode: "Offline",
      price: "₹20",
      rules:
        "1. Event will be held OFFLINE.\n2. Only 1st year students from PICT can participate in this event.\n3. The 1st round will consist of 20 MCQs which participants have to answer within 15 minutes.\n4. In the 2nd round, shortlisted participants will have to code for the given problems.For this round, sample code snippets for basic loops (for, while) or conditional statements (if, elseif, else) will be given.",
      rounds:
        "Round 1 - Coding Round : This is an MCQ round consisting of questions based on various mathematical concepts.\nRound 2 - Technical Round: In this round, qualified participants will have to write code for a given set of problems. The questions are simple and designed for first-year students.",
      teamDistribution: "Only individual participation is allowed.",
      eventLeads: [
        { name: "Siddhesh", phone: "8856862577" },
        { name: "Tejas", phone: "7058389422" },
      ],
    },
    codelicious: {
      mode: "Online",
      price: "Free",
      rules:
        "1. Participants need to have an account on CodeChef.\n2. Participants will get a maximum of 3 hours to solve the questions.\n3. Use of unfair means will result in direct disqualification.\n4. The decision of the organisers will be considered final and binding on all the participants.",
      rounds:
        "Round 1: This event comprises of a single round. It is an online contest hosted on Codechef",
      teamDistribution: "Only individual participation is allowed",
      eventLeads: [
        { name: "Shreekar", phone: "7666439458" },
        { name: "Prathamesh", phone: "8624021404" },
      ],
    },
    "compute-and-compete": {
      mode: "Online + Offline",
      price: "₹",
      rules:
        "1. Participants need to have an account on HackerRank.\n 2. The decision of the organisers will be considered final and binding on all the participants.\n3. Use of unfair means will result in direct disqualification.\n4. Participants will get a maximum of 1.5 hours to solve the questions in the first round.\n5. Shortlisted participants will be selected for the second round which will be held offline at PICT.",
      rounds:
        "Round 1 -Reverse Coding: Candidates will be given 6-7 questions to solve and it will be conducted on Hackerrank online.\nRound 2- Bug-Off: Particpants will be given code snippets to debug.",
      teamDistribution:
        "Team of 2 (max). \nIndividual participation is also allowed. ",
      eventLeads: [
        { name: "Aniket", phone: "8889904950" },
        { name: "Shreenath", phone: "9146379805" },
      ],
    },
    dataquest: {
      mode: "Online",
      price: "₹20",
      rules:
        "1.There will be two categories - FE-SE (Junior Category) and TE-BE (Senior Category).\n2.The competition will be hosted on the Submission Platform.\n3. The problem statement along with the dataset will be released on the platform.\n4. The link for the contest will be shared with the participants through email.\n5. Participants are expected to submit their CSV files along with .ipynb/py files.\n5. You can view the public leaderboard to compete against the best of the best solutions and achieve better results.\n6. The right to decide optimization metric will rest with the judges and it will be final and binding.",
      rounds:
        "Round 1:\n1. For (FE-SE) category only 1 round would be there. The winners will be decided according to the decided metrics.\n2. For (TE-BE) category 2 rounds would be there. Participants will be filtered out according to the decided metrics and qualified to round 2.\n3. A maximum of 3 submissions are allowed per day. The best score out of the submissions will be considered for evaluation.\nRound 2:\n1. For (TE-BE) category 2 rounds are going to be conducted. Participants will be filtered out from round 1 qualified to round 2.\n2. A maximum of 3 submissions are allowed per day. The best score out of the submissions will be considered for evaluation.",
      teamDistribution: "Only individual participation is allowed.",
      eventLeads: [
        { name: "Swarup", phone: "7385165396" },
        { name: "Tanisha", phone: "9834050189" },
      ],
    },
    webnapp: {
      mode: "Online + Offline",
      price: "₹70",
      rules:
        "1.Topics are out, and the deadline for presentation submission (Round 1) will be declared soon.\n2. Each Team can submit an entry for only one Problem Statement. Participants are expected to submit a PPT of the proposed solution and idea on the submission platform for round-1. Adding the link of the figma prototype or github repository in the PPT is optional but preferred.\n3. The shortlisted teams from round 1 will be informed by the organisers. The teams are expected to complete major implementation till round-2.\n4. Use of web frameworks and any suitable tech stack is allowed but the use of ready-made templates are prohibited.\n5. Participants should rename their PPT name according to their Leader's name as FirstName_LastName_MobileNumber.extension.\n6. All the updates will be conveyed to the leader's email id.\n7.The decision of the organisers and judges will be final and binding on all participants.",
      rounds:
        "Round 1:\nThe judgement for this round will be on the basis of the following factors:\n● The presentation of unique ideas implemented for the selected theme.\n● Core understanding of code and the tech stack used.\n● For (FE/SE- Frontend only) judged on frontend application idea/solution.\n● For (TE/BE - Full Stack) judged on techstack, frameworks, design and idea for the full-stack application.\nRound 2 (Blended):\n The selected teams from Round 1 will be asked to show the working web or app in blended mode.\nThe judgement of this round will be on the following factors:\n● Maximum end-to-end implementation of the live/on-spot changes of features as directed by the judges of the event.\n● Timely execution, cleaner code and seamless working model/prototype of the application is desired.\n● For (FE/SE- Frontend only) judged on frontend application implementation.\n● For (TE/BE - Full Stack ) judged on full- stack application implementation and extra points will be given to ML/Blockchain/AR-VR implementation and business potential.\n● Both online and offline rounds will have a time limit of 4 hours similar to hackathons.\n",
      teamDistribution:
        "1. FE-SE (Frontend only): Groups of a maximum of 3 participants.\n2. TE-BE(Full Stack Application): Groups of a maximum of 4 participants.\n3. Only the team leader has to register for this event.",
      eventLeads: [
        { name: "Soham", phone: "7620106310" },
        { name: "Kalyani", phone: "8080153807" },
      ],
    },
    electroquest: {
      mode: "Offline",
      price: "₹50",
      rules:
        "Rules for Round 1:\n1. All the teams would be given a maximum of 2 hours to finish the treasurehunt in round 1.\n2. Use of the internet or any other resource is allowed during the treasure hunt.\n3. Only the top 5 teams from each category would qualify for the second round.\n4. The hunt is strictly restricted to the college campus.\n5. Any help or clarity on the proceedings of the event would be given by volunteers present on site.\n6. Hints related to the question will be provided by volunteers to the team by deducting the certain number of points per hint. (2 hints max).\nRules for Round 2:\n 1. For this round all teams have 1 hour for designing the circuit.\n2. Team can use the first 20 minutes for internet searching",
      rounds:
        "Round 1:\n The first round is a treasure hunt across the campus using technical and electronics-related clues. The qualifying teams would be given problem statements having difficulty levels according to the year of the participants.\n Round 2:\n FE and SE/TE/BE students would have to face simple circuit debugging and circuit designing problems in the second round.",
      teamDistribution:
        "Teams of 3 (max)\n1. FE\n2. SE/TE/BE\nNote- Only the team leader has to register for this event",
      eventLeads: [
        { name: "Mohammed", phone: "8767474441" },
        { name: "Srirang", phone: "9028832111" },
      ],
    },
    "hire-hustle": {
      mode: "Online",
      price: "₹50",
      rules:
        "1. All rounds of the event will be held ONLINE.\n2. The first round will consist of 4 questions which participants have to successfully submit the code for, within 90 minutes.\n3. Qualified candidates will receive an interview schedule through the mail.\n4. The decision of the organisers and judges is final and binding.",
      rounds:
        "Round 1: This is a coding round in which participants will have to write code for a given set of problems.\n Round 2: This is a technical round, where qualified participants will undergo a technical interview similar to the one in the placement procedure.\nRound 3: In the final round, the participants will undergo an HR interview to assess soft skills of the participants.",
      teamDistribution: "Only individual participation is allowed.",
      eventLeads: [
        { name: "Omkar", phone: "6300656863" },
        { name: "Pranav", phone: "8766543106" },
      ],
    },
    dextrous: {
      mode: "Offline",
      price: "₹30",
      rules:
        "Rules and Regulations:1. All the rounds are elimination rounds.\n2. Selected participants would receive a mail or phone call from the team.\n3. Decision of organisers will be considered final.",
      rounds:
        "Round1: A general MCQ Type Quiz to test your aptitude.\nRound 2: Group Discussion Round.\nRound 3: HR Interview Round",
      teamDistribution: "Only individual participation is allowed.",
      eventLeads: [
        { name: "Anushree", phone: "8484024100" },
        { name: "Madhura", phone: "9834396355" },
      ],
    },
    fandom: {
      mode: "Offline",
      price: "₹30",
      rules:
        "1. Every participant is allowed to appear for the first round.\n2. The participants qualifying for the first round will appear in the second round.\n3. Use of any unfair means will result in direct disqualification.\n4. The decision of the organisers will be final and binding on all participants.",
      rounds:
        "Round 1: A general quiz of the duration of 30 minutes.\nRound 2:An interactive round having a variety of questions related to your favourite Fandoms",
      teamDistribution: "Only individual participation is allowed.",
      eventLeads: [
        { name: "Devashish", phone: "9607601090" },
        { name: "Aakanksha", phone: "8530053300" },
      ],
    },
    insight: {
      mode: "Online + Offline",
      price: "₹20",
      rules:
        "1. Plagiarised entries will be disqualified.\n2. Round 1 topics will be declared 2-3 days before the event.\n3. The decision of the organisers and judges will be final.",
      rounds:
        "Round 1:(Online)\nStory writing: 5 story prompts would be given out of which participants have to write on any one of the topics.\nRound 2:(Offline)\nParticipants would be given a topic for picture narrative. The topic will be given on the spot. Participants will compete in a limited time frame.",
      teamDistribution: "Teams of 3",
      eventLeads: [
        { name: "Maitri", phone: "7975037272" },
        { name: "Sonali", phone: "7875257646" },
      ],
    },
    "freeze-the-second": {
      mode: "Online",
      price: "₹20",
      rules:
        "1. A single participant can submit only one photo\n2. Images should be shot by the person themselves and not directly taken or downloaded from the internet.\n3. Winners will be decided by the organiser.",
      rounds:
        "It comprises of a single round of submission of your photograph.",
      teamDistribution: "Only individual participation is allowed.",
      eventLeads: [
        { name: "Gaurav", phone: "8484987616" },
        { name: "Soumitra", phone: "9142002323" },
      ],
    },
    "paper-presentation": {
      mode: "Online",
      price: "₹",
      rules:
        "1.Plagiarized content will lead to immediate disqualification.\n2.Participants must submit their papers in PDF format.\n3.The decision of the judges will be final and binding.",
      rounds:
        "Round 1: Participants have to submit their paper on the Submission Platform.\nRound 2: Shortlisted participants have to present their paper to the judges.",
      teamDistribution: "Only individual participation is allowed.",
      eventLeads: [
        { name: "Anjali", phone: "7058443037" },
        { name: "Aditya", phone: "9426034129" },
      ],
    },
  };

  // Fallback event details in case the title doesn't match any event
  const eventData = eventDetails[title as keyof typeof eventDetails] || {
    mode: "N/A",
    price: "N/A",
    rules: "No details available.",
    rounds: "N/A",
    teamDistribution: "N/A",
    eventLeads: [],
  };

  return (
    <div className="md:relative">
        <div className="md:absolute md:top-20 md:left-20">
      {/* Pass the extracted event data to the EventDetailsCard component */}
      <EventDetailsCard
        title={title}
        mode={eventData.mode}
        price={eventData.price}
        rules={eventData.rules}
        rounds={eventData.rounds}
        teamDistribution={eventData.teamDistribution}
        eventLeads={eventData.eventLeads}
      />
      </div>
    </div>
  );
};

export default EventDetailsPage;
