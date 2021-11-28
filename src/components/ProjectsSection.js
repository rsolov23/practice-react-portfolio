import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import SectionTitle from "./SectionTitle";
import projectInfo from "../assets/data/data";
import ProjectItem from "./ProjectItem";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    /* background: #000; */
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    /* color: var(--gray-1); */
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;
export default function ProjectsSection() {
  console.log(projectInfo);
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent work" />
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projectInfo.map((projectInfo, index) => {
              if (index >= 8) return;
              return (
                <SwiperSlide key={projectInfo.id}>
                  <ProjectItem
                    title={projectInfo.title}
                    img={projectInfo.img}
                    desc={projectInfo.summary}
                    skills={projectInfo.skills}
                    github={projectInfo.github}
                    deployed={projectInfo.deployed}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
