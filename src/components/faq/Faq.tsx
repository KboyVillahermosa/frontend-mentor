import React from "react";
import "./Faq.css";
import { Accordion } from "flowbite-react";

const Faq: React.FC = () => {
  return (
    <>
      <div className="faq-title">
        <div className="faq-title-content">
          <h1>FAQs</h1>
        </div>
      </div>

      <div className="faq-header">
        <div className="faq-content">
          <Accordion className="w-full">
            <Accordion.Panel>
              <Accordion.Title className="title font-bold text-black">
                Is it free?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The majority of our challenges are free, yes. We do have some
                  that are premium and require a{" "}
                  <span className="underline">Pro subscription </span> to
                  access. It will say on each challenge whether they are free or
                  premium, so it's easy to tell the difference.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="faq-content">
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title>
                Can I use these projects in my portfolio?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Definitely! Please do feel free to use whatever you build in
                  your portfolio. Helping developers add professional-looking
                  projects to their portfolio was one of the reasons we created
                  this platform!
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>

        <div className="faq-content">
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title>
                Can I take the challenges as a beginner?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  For sure! Our challenges have five different levels of
                  difficulty. We'd recommend starting with the newbie ones. You
                  might also want to start with the HTML & CSS only challenges
                  first. As you build up your skills and confidence, you can
                  take on more complex projects
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="faq-content">
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title>
                Can I use these projects in my portfolio?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Definitely! Please do feel free to use whatever you build in
                  your portfolio. Helping developers add professional-looking
                  projects to their portfolio was one of the reasons we created
                  this platform!.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="faq-content">
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title>How do I start?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  You can{" "}
                  <span className="underline">
                    {" "}
                    see all of our challenges here.
                  </span>{" "}
                  To start a challenge, click the "Start Challenge" button on
                  the challenge page. This will take you to the Challenge Hub,
                  where you can download the starter files, including a README
                  file which will help you get set up. We'd recommend starting
                  with one of our newbie level challenges. You can then work
                  your way up from there.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="faq-content">
          <Accordion collapseAll>
            <Accordion.Panel className="">
              <Accordion.Title className="">
                {" "}
                How can I get help if I'm stuck on a challenge?{" "}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The best (and quickest) way to get help on a challenge is in
                  our Discord server. There are thousands of other developers in
                  there, so it's a great place to ask questions. We even have a
                  dedicated "help" channel! If you haven't joined yet, you can
                  <span className="underline">
                    {" "}
                    get an invite to our Discord server here.
                  </span>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="faq-content">
          <Accordion collapseAll>
            <Accordion.Panel className="">
              <Accordion.Title className="">
                {" "}
                Can I use libraries/frameworks on these projects?{" "}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Yes! Our challenges provide professional designs but there are
                  no rules on what tools to use. So feel free to use anything
                  you like to build your projects.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="faq-content">
          <Accordion collapseAll>
            <Accordion.Panel className="">
              <Accordion.Title className="">
                {" "}
                Am I guaranteed to get hired through the Hiring Platform?{" "}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  We can’t offer any guarantees, unfortunately. You can showcase
                  your skills and knowledge to recruiters on our Hiring Platform
                  by completing challenges and engaging with the community. This
                  may lead to job opportunities, but it also may not. We still
                  recommend applying for jobs using traditional channels like
                  job boards.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
