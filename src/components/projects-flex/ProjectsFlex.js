import React, { useState } from "react";
import Projects from "../projects/Projects";
import { AiOutlineArrowDown } from "react-icons/ai";

//img
import familysite from "../../img/Family-Home Todo Website SS.jpg";
import kitapsite from "../../img/book-website.jpg";
import gamesite from "../../img/Magic Match SS.jpg";
import netflixclone from "../../img/Netflix Clone SS.jpg";
import covidsite from "../../img/Covid Tracker SS.jpg";

//

import genreImg from "../../img/genre-codes.jpg";
import rate from "../../img/rate.jpg";
import new1 from "../../img/new.jpg";
import threeDot from "../../img/three-dot.jpg";
import randomBanner from "../../img/banner-random.jpg";
import searchTrailer from "../../img/search-trailer.jpg";
import movieApiSet from "../../img/movie-api-set.jpg";
import movieRequests from "../../img/movies-requests.jpg";
import covidCircle from "../../img/covid-circle.jpg";
import covidSortedData from "../../img/covid-sorted-data.jpg";
import covidGraph from "../../img/covid-graph.jpg";
import covidApiUse from "../../img/covid-api-use.jpg";
import firebaseOutHook from "../../img/firebase-out-hook.jpg";
import firebaseStore from "../../img/firebase-store.jpg";
import firebaseDocument from "../../img/firebase-document.jpg";
import firebaseLogin from "../../img/firebase-login-hook.jpg";
import createTodo1 from "../../img/create-todo-1.jpg";
import createTodo2 from "../../img/create-todo-4.jpg";
import bookCategory from "../../img/book-category.jpg";
import cardGame from "../../img/card-game-main.jpg";
import cardGame2 from "../../img/card-game-2.jpg";

//

//style
import "./project-flex.css";

export default function ProjectsFlex() {
  return (
    <div className="container">
      <div className="projects-flex-grid">
        <div className="my-projects-title">
          <h1>My Projects</h1>
        </div>

        <Projects
          projectLink={"https://canerdemir-netflix-clone.netlify.app/"}
          bigImg
          projectImg={netflixclone}
          projectDetails={
            <div>
              <div className="project-detail-info">
                <div className="for-codes">
                  <p className="for-codes-p"> Short look to codes</p>{" "}
                  <span>
                    {" "}
                    <AiOutlineArrowDown className="project-arrow" />{" "}
                  </span>{" "}
                </div>
                <p>
                  +Api, library and technologies I use; Themoviedb Api, Youtube
                  Api, Movie Trailer Api, axios, React.js, CSS. My purpose in
                  making this site was to use the data from a single API at the
                  highest level.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project1-img1" src={movieApiSet} alt="" />

                <img
                  className="project1-big-img1 mobile-big"
                  src={movieApiSet}
                  alt=""
                />
                <p className="project1-p1">
                  +The process of extracting information from API and passing to
                  state.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project1-img2" src={genreImg} alt="" />

                <img
                  className="project1-big-img2 mobile-big"
                  src={genreImg}
                  alt=""
                />
                <p className="project1-p2">
                  +Api was giving the movie subjects in numbers instead of
                  giving names directly. So I found which number belongs to
                  which topic, wrote the corresponding topics and created a
                  function to display it on the page.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project1-img3" src={rate} alt="" />

                <img
                  className="project1-big-img3 mobile-big"
                  src={rate}
                  alt=""
                />

                <p className="project1-p3">
                  +Sometimes Api gave the average score with a fractional number
                  like 8.675. Since I thought it would look better, I wrote a
                  function that will only show the first fractional part. For
                  example 8.6 instead of 8.675.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project1-img4" src={threeDot} alt="" />

                <img
                  className="project1-big-img4 mobile-big"
                  src={threeDot}
                  alt=""
                />

                <p className="project1-p4">
                  +If the description of the movie is larger than 150
                  characters, I wrote a function so that the rest is not visible
                  and added '"..." to the end of the description
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project1-img5" src={randomBanner} alt="" />

                <img
                  className="project1-big-img5 mobile-big"
                  src={randomBanner}
                  alt=""
                />
                <p className="project1-p5">
                  +In the banner section, I wrote a function that will randomly
                  display any movie on the banner from the popular category from
                  Api.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project1-img6" src={searchTrailer} alt="" />

                <img
                  className="project1-big-img6 mobile-big"
                  src={searchTrailer}
                  alt=""
                />

                <p className="project1-p6">
                  +When the play button is pressed in the banner section, I
                  wrote a function to search youtube for the movie trailer using
                  the youtube api in the background. The function displays the
                  first search result. In other words, sometimes instead of an
                  irrelevant video or trailer, it can show an interview video
                  with the actors. If the video does not come out, you can
                  refresh the page and try another movie.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project1-img7" src={movieRequests} alt="" />

                <img
                  className="project1-big-img7 mobile-big"
                  src={movieRequests}
                  alt=""
                />

                <p className="project1-p7">
                  +The edit I made in the api requests, to make the code look
                  more organized.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project1-img8" src={new1} alt="" />

                <img
                  className="project1-big-img8 mobile-big"
                  src={new1}
                  alt=""
                />

                <p className="project1-p8">
                  +Api was giving the release date of the movies as text instead
                  of numbers. I removed the "-" signs in between from the
                  incoming data and converted the remainder into numbers. And if
                  the movie was published 2 months before the date the site was
                  viewed at that moment, I wrote a function to make the text
                  "New" appear.
                </p>
              </div>
            </div>
          }
        />

        <Projects
          projectLink={"https://canerdemir-covid-tracker.netlify.app/"}
          projectImg={covidsite}
          projectDetails={
            <div>
              <div className="project-detail-info">
                <div className="for-codes">
                  <p className="for-codes-p"> Short look to codes</p>{" "}
                  <span>
                    {" "}
                    <AiOutlineArrowDown className="project-arrow" />{" "}
                  </span>{" "}
                </div>
                <p>
                  + Api, library and technologies I use; Leaflet Api, Disease
                  Api, axios, React.js, CSS + The Material UI + Chart.js. My
                  purpose in making this site was to combine the information of
                  two totally different APIs with completely different purposes
                  and create something different.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project2-img1" src={covidCircle} alt="" />

                <img
                  className="project2-big-img1 mobile-big"
                  src={covidCircle}
                  alt=""
                />
                <p className="project2-p1">
                  +I combined the "Circle" from the Leaflet Api and the covid
                  numbers of the countries from the Disease Api. And I
                  multiplied the area of ​​the "Circle" data with these numbers
                  to get rings that grow and shrink according to the covid
                  status of the countries and color them according to the case.
                  I combined the information of Leaflet's "Popup" component with
                  the Disease Api to show the "case", "death" and "healing"
                  information when clicked on these rings.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project2-img2" src={covidSortedData} alt="" />

                <img
                  className="project2-big-img2 mobile-big"
                  src={covidSortedData}
                  alt=""
                />
                <p className="project2-p2">
                  +I wrote a function to sort the number of cases of countries
                  in the table I created, from largest to smallest.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project2-img3" src={covidGraph} alt="" />

                <img
                  className="project2-big-img3 mobile-big"
                  src={covidGraph}
                  alt=""
                />

                <p className="project2-p3">
                  +I combined Graph.js with information from Disese Api to
                  create a graph. And I wrote a function for this chart to
                  properly show the daily ups and downs. If I didn't do this,
                  even if 1 person was sick every day, this information would be
                  added on top of the previous ones, and even if there was 1
                  patient per day, the graph would go up at an increasing rate.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project2-img4" src={covidApiUse} alt="" />

                <img
                  className="project2-big-img4 mobile-big"
                  src={covidApiUse}
                  alt=""
                />

                <p className="project2-p4">
                  +Part of pulling information from the api and passing that
                  information to pre-created components.
                </p>
              </div>
            </div>
          }
        />
        <Projects
          projectLink={"https://caner-family-home-todo.firebaseapp.com/"}
          projectImg={familysite}
          projectDetails={
            <div>
              <div className="project-detail-info">
                <div className="for-codes">
                  <p className="for-codes-p"> Short look to codes</p>{" "}
                  <span>
                    {" "}
                    <AiOutlineArrowDown className="project-arrow" />{" "}
                  </span>{" "}
                </div>
                <p>
                  +API, library and technologies I use; Firebase, React.js, CSS.
                  My purpose of making this site is to save data in backend
                  using a BaaS ("Backend as a Service"), retrieve saved data,
                  extract data from Api, save in backend and reuse later. The
                  reason I prefer Firebase over AWS is because for use under
                  certain volume AWS is free for the first year whereas Firebase
                  is completely free.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project3-img1" src={firebaseOutHook} alt="" />

                <img
                  className="project3-big-img1 mobile-big"
                  src={createTodo2}
                  alt=""
                />

                <p className="project3-p1">
                  +Part of the process of creating Todo, assigning to a person
                  or persons, pulling info from Api and saving all this in
                  backend
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project3-img2" src={firebaseStore} alt="" />

                <img
                  className="project3-big-img2 mobile-big"
                  src={firebaseStore}
                  alt=""
                />
                <p className="project3-p2">
                  +Hook I wrote to access the recorded data.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project3-img3" src={firebaseDocument} alt="" />

                <img
                  className="project3-big-img3 mobile-big"
                  src={firebaseDocument}
                  alt=""
                />

                <p className="project3-p3">
                  +Hook I wrote to access real-time data.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project3-img4" src={firebaseLogin} alt="" />

                <img
                  className="project3-big-img4 mobile-big"
                  src={firebaseLogin}
                  alt=""
                />

                <p className="project3-p4">
                  +Login and online-offline status hook
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project3-img5" src={createTodo1} alt="" />

                <img
                  className="project3-big-img5 mobile-big"
                  src={firebaseOutHook}
                  alt=""
                />
                <p className="project3-p5">
                  +Logout and user online-offline status Hook.
                </p>
              </div>
            </div>
          }
        />
        <Projects
          projectLink={
            "https://piupiunn.github.io/canerdemir-kitap-tavsiyeleri/"
          }
          projectImg={kitapsite}
          projectDetails={
            <div>
              <div className="project-detail-info">
                <div className="for-codes">
                  <p className="for-codes-p">Short look to codes</p>{" "}
                  <span>
                    {" "}
                    <AiOutlineArrowDown className="project-arrow" />
                  </span>{" "}
                </div>
                <p>
                  +API, library and technologies I use; React.js, CSS. I created
                  book components in different colors by just giving props
                  without creating other components on a single book component.
                  This site is live with a real domain and is already getting
                  real visitors. I love reading books as a hobby and when I
                  first started reading, I had a hard time finding a book above
                  a certain quality among so many books. I wanted new readers
                  not to have this hassle. I am also a completely self-learner
                  and I learn most of my knowledge by researching on the
                  internet, so also I wanted to pay my debt to the internet
                  community on a subject I know.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project4-img1" src={bookCategory} alt="" />

                <img
                  className="project4-big-img1 mobile-big"
                  src={bookCategory}
                  alt=""
                />
                <p className="project4-p1">
                  +I do derive different ones from the same component by calling
                  the props I have given to the Book component.
                </p>
              </div>
            </div>
          }
        />
        <Projects
          projectLink={"https://canerdemir-game.netlify.app/"}
          projectImg={gamesite}
          projectDetails={
            <div className="">
              <div className="project-detail-info ">
                <div className="for-codes">
                  <p className="for-codes-p">Short look to codes</p>{" "}
                  <span>
                    {" "}
                    <AiOutlineArrowDown className="project-arrow" />
                  </span>{" "}
                </div>
                <p>
                  +Api, library and technologies I use; React.js, CSS. My little
                  lovely first project ^^
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project5-img1" src={cardGame} alt="" />

                <img
                  className="project5-big-img1 mobile-big"
                  src={cardGame}
                  alt=""
                />
                <p className="project5-p1">
                  +Card selection, matching of card selections or vice versa,
                  the functions I wrote for random redistribution of the card
                  deck when the game is restarted, to show how many moves have
                  been made in a game.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project5-img2" src={cardGame2} alt="" />

                <img
                  className="project5-big-img2 mobile-big"
                  src={cardGame2}
                  alt=""
                />
                <p className="project5-p2">+The process of flip the cards.</p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
