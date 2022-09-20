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
                  +Kullandığım Api, kütüphane ve teknolojiler; Themoviedb Api,
                  Youtube Api, Movie Trailer Api, axios, React.js, CSS. Bu
                  siteyi yapmakta ki amacım tek bir Api'den gelen verileri en
                  üst düzeyde kullanabilmekti.
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
                  +Api'den bilgi çekip state'e geçme işlemi.
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
                  +Api film konularını direkt isimle vermek yerine sayılarla
                  veriyordu. Bende hangi sayının hangi konuya ait olduğunu
                  bulup, karşılık gelen konuları yazdım ve bunun sayfada
                  gösterilmesi için bir fonksiyon oluşturdum.
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
                  +Api puan ortalamasını bazen 8.675 gibi bir küsuratlı sayıyla
                  veriyordu. Daha güzel gözükeceğini düşündüğüm için Sadece ilk
                  kusuratlı kısmın gözükmesini sağlayacak bir fonksiyon yazdım.
                  Örneğin 8.675 yerine 8.6. gözükmesi gibi.
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
                  +Api'den gelen filmin açıklma kısmı eğer 150 karakterden
                  büyükse kalan kısmın gözükmemesi ve '...’ eklenmesi için bir
                  fonksiyon yazdım.
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
                  +Banner kısmında Api'den gelen populer kategorisinden random
                  bir şekilde herhangi bir filmi banner'da gösterecek bir
                  fonksiyon yazdım.
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
                  +Banner kısmında play tuşuna basıldığında arka planda youtube
                  api'sini kullanarak film fragmanını youtube aratmayı
                  sağlayacak bir fonksiyon yazdım. Fonksiyon ilk çıkan arama
                  sonucunu gösteriyor. Yani bazen alakasız bir video yada
                  fragman yerine oyuncularla röportaj videosu çıkartabiliyor.
                  Eğer Video çıkmazsa sayfayı yenileyip başka bir filmde
                  deneyebilirsiniz.
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
                  +Kodun daha düzenli gözükmesi için api requestlerde yaptığım
                  düzenleme.
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
                  +Api filmlerin yayınlanma tarihini sayı yerine yazı olarak
                  veriyordu. Bende gelen datadan aralarda ki "-" işaretlerini
                  çıkarıp, kalanı sayıya çevirip, eğer belirttiğim tarihten
                  sonra yayınlanmışsa "New" yazısının çıkmasını sağlamak için
                  bir fonksiyon yazdım.
                </p>
              </div>
            </div>
          }
        />

        <Projects
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
                  +Kullandığım Api, kütüphane ve teknolojiler; Leaflet Api,
                  Disease Api, axios, React.js, CSS + The Material UI +
                  Chart.js. Bu siteyi yapmakta ki amacım tamamen farklı amaçta
                  ki iki farklı Api'nin bilgilerini birleştirip ortaya farklı
                  bir şey çıkartmaktı.
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
                  +Leaflet Api'sinden gelen ve konum belirten "Circle"
                  datasıyla, Disease Api'sinden gelen ülkerin covid sayılarını
                  birleştirdim ve bu sayılarla "Circle" datasının alanını çarpıp
                  ülkelerin covid durumuna göre büyüyüp küçülen halkalar elde
                  ettim ve bunlara vakaya göre renk verdim. Bu halkalara
                  tıkladığında "vaka", "ölüm" ve "iyileşme" bilgisini göstermek
                  içinde Leaflet'in "Popup" componentiyle Disease Api'sinin
                  bilgilerini birleştirdim.
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
                  +Oluşturduğum tabloda ülkelerin vaka sayısını büyükten küçüğe
                  sıralamak için bir fonksiyon yazdım.
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
                  +Bir grafik oluşturmak için Disese Api'sinden gelen
                  bilgilerle, Graph.js'i birleştirerek bir grafik elde ettim. Ve
                  bu grafiğin artan oranlı olarak gözükmesi için bir fonksiyon
                  yazdım.
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
                  +Bazı Api'den bilgi çekme ve bu bilgileri önceden oluşturulan
                  componentlere geçme kısımları.
                </p>
              </div>
            </div>
          }
        />
        <Projects
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
                  +Kullandığım Api, kütüphane ve teknolojiler; Firebase,
                  React.js, CSS. Bu siteyi yapmakta ki amacım bir BaaS("Backend
                  as a Service") kullanarak verileri backende kaydetmek,
                  kaydedilen verileri geri çekmek, Api'den veri çkeip bunu
                  backende kaydetip daha sonra tekrar kullanabilmekti. AWS
                  yerine Firebase tercih etmenmin sebebi belirli bir datanın
                  altında kullanımda AWS ilk sene ücretsizken, Firebase'in
                  tamamen ücretsiz olması.
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
                  +Todo oluşturmak, bunu kişi veya kişilere atamak, Api'den
                  bilgi çekmek ve tüm bunların hepsinin backende kayıt edilmesi
                  işlemlerinin bir kısmı.
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
                  +Kayıtlı verilere ulaşmak için yazdığım Hook.
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
                  +Gerçek zamanlı veriye ulaşmak için yazdığım Hook.
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
                  +Giriş yapma ve online-offline-durum Hook'u
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
                  +Yazdığım çıkış yapma ve kullanıcı online-offline durum
                  Hook'u.
                </p>
              </div>
            </div>
          }
        />
        <Projects
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
                  +Kullandığım Api, kütüphane ve teknolojiler; React.js, CSS.
                  Tek bir book componenti üzerinden başka componentler
                  oluşturmadan sadece proplar vererek farklı renklerde kitap
                  componenetleri oluşturdum. Bu site gerçek bir domain adıyla
                  yayında ve halihazır da gerçek ziyaretçiler alıyor. Hobi
                  olarak kitap okumayı seviyorum ve okumaya ilk kez başladığımda
                  belirli bir kalitenin üstünde ki kitapları bu kadar fazla
                  kitap arasında bulmakta zorlanmıştım. Yeni okumaya
                  başlayacaklar bu zorluğu yaşamasın istedim. Ayrıca tamamen bir
                  kendi kendine öğrenenim ve bilgilerimin çoğunu internette
                  araştırarak öğreniyorum, bildiğim bir konuda internet
                  topluluğuna borcumu ödemek istedim.
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
                  +Book componenetine verdiğim propları çağırarak aynı
                  componentten farklılarını türetmem.
                </p>
              </div>
            </div>
          }
        />
        <Projects
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
                  +Kullandığım Api, kütüphane ve teknolojiler; React.js, CSS.
                  Benim küçük sevgili ilk projem ^^
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
                  +Kart seçimi, kart seçimlerinin eşleşmesi veya tersi durumda
                  olacaklar, oyuna tekrar başlandığında kart destesinin random
                  şekilde tekrar dağıtılması, bir oyunda kaç hamle yapıldığının
                  belirtilmesi için gerekli işlemler.
                </p>
              </div>

              <div className="project-detail-info">
                <img className="project5-img2" src={cardGame2} alt="" />

                <img
                  className="project5-big-img2 mobile-big"
                  src={cardGame2}
                  alt=""
                />
                <p className="project5-p2">+Kartların çevrilmesi işlemi.</p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
