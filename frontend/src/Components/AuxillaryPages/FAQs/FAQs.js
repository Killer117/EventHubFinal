import React, { useEffect, useState } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import bgimage from "../../../pictures/PagesBG.jpg";
import "./FAQs.css";

import axios from "axios";

function FAQs() {
  // const [faqContents, setFaqContent] = useState([]);
  let faqContents = [
    {
      key: 1,
      keyword: "One",
      question: "What is Event Hub ?",
      answer:
        "EventHub is a platform dedicated to provide customers with a wide assortment of different event management service plans of different companies for all sorts of corporate and personal events. Be it live shows, star nights, product launches, theme parties, wedding events, birthday parties, fashion shows, ghazal nights or any other event.",
    },
    {
      key: 2,
      keyword: "Two",
      question: "What type of events are available at EventHub?",
      answer:
        "EventHub is a platform for you to find Event plans and Services provided by various Event organisers in the Market and contact them through EventHub.Therefore all types of Events that are provided by the organisers are present at the platform such as: Wedding, Birthday Celebrations, Theme Parties, Formal Events and independent services like Catering, Decoration, Music, etc.are available at EvenHub.",
    },
    {
      key: 3,
      keyword: "Three",
      question: "How are different Event plans Rated?",
      answer:
        "Rating of any Service or Event plan at EventHub is calculated solely by consumer feedback only. It is the average of the ratings given by every consumer that has booked that service or Event Plan.",
    },
    {
      key: 4,
      keyword: "Four",
      question: "Is EventHub safe for payments and such transactions ?",
      answer:
        "EventHub is just a platform for the customers to compare and choose from various organisers. The final booking and payments are done at the respective websites of the organisers.",
    },
    {
      key: 5,
      keyword: "Five",
      question: "Do I need to login to browse and use EventHub ?",
      answer:
        "No, the login option is just for the users to keep track of their activity on the platform and to better communicate with the other party.",
    },
    {
      key: 6,
      keyword: "Six",
      question: "Is EventHub free to use ?",
      answer:
        "Yes, you can browse and compare the services offered by various organisers free of any cost on EventHub. ",
    },
    {
      key: 7,
      keyword: "Seven",
      question: "How to contact us?",
      answer:
        "You can email us at eventhub_help@gmail.com or call us at 9971539668.",
    },
    {
      key: 8,
      keyword: "Eight",
      question: "How do I add an FAQ ?",
      answer:
        " If you're unable to find your answers in here, you can mail us your question at eventhub_help@gamil.com ",
    },
  ];

  useEffect(() => {
    // console.log("Hello FAQs");
    // if (faqContents !== []) {
    //   axios.get("http://localhost:5000/api/faq").then((res) => {
    //     setFaqContent(res.data);
    //   });
    // }
    // console.log(faqContents);
    document.title = "FAQs";
  });
  return (
    <div className="faqs d-flex flex-column">
      <Navbar activeTab={"FAQs"} />
      <div className="faqs-first">
        <img src={bgimage} className="faqs-image" alt="bgImage" />
        <div className="faqs-image-content">
          <p className="faqs-text">FAQs</p>
        </div>
      </div>
      <div
        className="accordion d-flex nowrap justify-content-center faq-accordian mb-3"
        id="accordionExample"
      >
        {faqContents.map((item) => {
          return (
            <div key={item.key} className="card faqs-card m-2">
              <div
                className="card-header faqs-card-header"
                id={`heading${item.keyword}`}
              >
                <h2 className="mb-0">
                  <button
                    className={`btn text-left ${
                      item.key !== 1 ? "collapsed" : ""
                    } faqs-accordian-button `}
                    type=""
                    data-toggle="collapse"
                    data-target={`#collapse${item.keyword}`}
                    aria-expanded="false"
                    aria-controls={`collapse${item.keyword}`}
                  >
                    {item.question}
                  </button>
                </h2>
              </div>
              <div
                id={`collapse${item.keyword}`}
                className="collapse"
                aria-labelledby={`headingOne${item.keyword}`}
                data-parent="#accordionExample"
              >
                <div className="card-body">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQs;
