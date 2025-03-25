import React from "react";
import Layout from "../layout";
// import Slider from "../slider/slider";
import startupPng from "../../Assets/startup.jpg";
// import OurExperts from '../OurExperts'
// import Testimonials from '../Testimonials'

function Home() {
  return (
    <Layout>
      <div class="py-16 bg-red-50">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src={startupPng}
                alt="imagae"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                Discover Our Webinar Solutions
              </h2>
              <p class="mt-6 text-gray-600">
                At Zenmatix, we believe in the transformative power of
                education. Our mission is to empower individuals and
                organizations worldwide through high-quality online training
                programs designed to unlock potential and drive success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Our Achievements
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We offer a dynamic online learning platform with a wide
                    array of courses tailored to give you the skills and
                    knowledge necessary for success. Our learners have achieved
                    their goals using our comprehensive training programs.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Our Team of Experts
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Our team consists of dedicated instructors and seasoned
                    industry professionals with extensive experience. Discover
                    more about our experts on our dedicated team page!
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Challenges We Address
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    In our fast-paced world, traditional learning methods can
                    seem limiting. We recognize the obstacles of busy schedules,
                    geographical barriers, and the need for flexible learning
                    solutions
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Customized Learning Experiences
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We are committed to providing engaging and interactive
                    online training. Whether you prefer visual, auditory, or
                    hands-on learning, we offer training approaches that suit
                    your unique learning style.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      {/* <Slider /> */}
    </Layout>
  );
}

export default Home;
