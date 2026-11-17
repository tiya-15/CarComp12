import Hero from "../components/home/Hero";
import Explore from "../components/home/Explore";
import Statistics from "../components/home/Statistics";
import CTA from "../components/home/CTA";
import WhyChoose from "../components/home/WhyChoose";
import FeaturedSection from "../components/home/FeaturedSection";
import ProgressCard from "../components/home/ProgressCard";
import { useState, useEffect } from "react";
import axios from "axios";

import { careers } from "../data/careers";
import { courses } from "../data/courses";
import { exams } from "../data/exams";
import "../pages/Home.css";

function Home() {
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const [userRes, historyRes] = await Promise.all([
  axios.get(
    `${import.meta.env.VITE_API_URL}/api/auth/profile`,
    config
  ),
  axios.get(
    `${import.meta.env.VITE_API_URL}/api/assessment/history`,
    config
  ),
]);

        console.log("Profile:", userRes.data);
        setUser(userRes.data);
        setHistory(historyRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Hero user={user} />
      {user && <ProgressCard history={history} />}
      <Statistics />
      <Explore />
      <WhyChoose />
      <FeaturedSection
        title="Featured Careers"
        subtitle="Explore some of the most popular career paths."
        data={careers}
        type="career"
        viewAll="/careers"
      />

      <FeaturedSection
        title="Popular Courses"
        subtitle="Discover courses that match your interests."
        data={courses}
        type="course"
        viewAll="/courses"
      />

      <FeaturedSection
        title="Featured Entrance Exams"
        subtitle="Learn about important entrance exams."
        data={exams}
        type="exam"
        viewAll="/exams"
      />
      <CTA />
    </>
  );
}

export default Home;