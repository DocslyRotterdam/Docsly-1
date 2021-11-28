import React from "react";
import Question from "./Question";
import styles from "./CommonQuestions.module.scss";

function CommonQuestions() {
  const pitanja = [
    {
      pitanje: "Nullam tincidunt molestie nisl et sollicitudin?",
      odgovor: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices posuere est. In ultricies fermentum velit non finibus. Phasellus ultricies purus purus, eget sagittis ex suscipit id. Aenean laoreet felis et elit finibus, vel vulputate nisi mollis. Aenean facilisis lorem vitae sem tincidunt rhoncus. Suspendisse consequat leo id semper ullamcorper. In lectus sapien, porttitor eu nulla et, sodales ornare tellus.`,
    },
    {
      pitanje: "Nullam tincidunt molestie nisl et sollicitudin?",
      odgovor: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices posuere est. In ultricies fermentum velit non finibus. Phasellus ultricies purus purus, eget sagittis ex suscipit id. Aenean laoreet felis et elit finibus, vel vulputate nisi mollis. Aenean facilisis lorem vitae sem tincidunt rhoncus. Suspendisse consequat leo id semper ullamcorper. In lectus sapien, porttitor eu nulla et, sodales ornare tellus.`,
    },
    {
      pitanje: "Nullam tincidunt molestie nisl et sollicitudin?",
      odgovor: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices posuere est. In ultricies fermentum velit non finibus. Phasellus ultricies purus purus, eget sagittis ex suscipit id. Aenean laoreet felis et elit finibus, vel vulputate nisi mollis. Aenean facilisis lorem vitae sem tincidunt rhoncus. Suspendisse consequat leo id semper ullamcorper. In lectus sapien, porttitor eu nulla et, sodales ornare tellus.`,
    },
    {
      pitanje: "Nullam tincidunt molestie nisl et sollicitudin?",
      odgovor: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices posuere est. In ultricies fermentum velit non finibus. Phasellus ultricies purus purus, eget sagittis ex suscipit id. Aenean laoreet felis et elit finibus, vel vulputate nisi mollis. Aenean facilisis lorem vitae sem tincidunt rhoncus. Suspendisse consequat leo id semper ullamcorper. In lectus sapien, porttitor eu nulla et, sodales ornare tellus.`,
    },
    {
      pitanje: "Nullam tincidunt molestie nisl et sollicitudin?",
      odgovor: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices posuere est. In ultricies fermentum velit non finibus. Phasellus ultricies purus purus, eget sagittis ex suscipit id. Aenean laoreet felis et elit finibus, vel vulputate nisi mollis. Aenean facilisis lorem vitae sem tincidunt rhoncus. Suspendisse consequat leo id semper ullamcorper. In lectus sapien, porttitor eu nulla et, sodales ornare tellus.`,
    },
    {
      pitanje: "Nullam tincidunt molestie nisl et sollicitudin?",
      odgovor: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices posuere est. In ultricies fermentum velit non finibus. Phasellus ultricies purus purus, eget sagittis ex suscipit id. Aenean laoreet felis et elit finibus, vel vulputate nisi mollis. Aenean facilisis lorem vitae sem tincidunt rhoncus. Suspendisse consequat leo id semper ullamcorper. In lectus sapien, porttitor eu nulla et, sodales ornare tellus.`,
    },
    {
      pitanje: "Nullam tincidunt molestie nisl et sollicitudin?",
      odgovor: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices posuere est. In ultricies fermentum velit non finibus. Phasellus ultricies purus purus, eget sagittis ex suscipit id. Aenean laoreet felis et elit finibus, vel vulputate nisi mollis. Aenean facilisis lorem vitae sem tincidunt rhoncus. Suspendisse consequat leo id semper ullamcorper. In lectus sapien, porttitor eu nulla et, sodales ornare tellus.`,
    },
    {
      pitanje: "Nullam tincidunt molestie nisl et sollicitudin?",
      odgovor: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices posuere est. In ultricies fermentum velit non finibus. Phasellus ultricies purus purus, eget sagittis ex suscipit id. Aenean laoreet felis et elit finibus, vel vulputate nisi mollis. Aenean facilisis lorem vitae sem tincidunt rhoncus. Suspendisse consequat leo id semper ullamcorper. In lectus sapien, porttitor eu nulla et, sodales ornare tellus.`,
    },
    {
      pitanje: "Nullam tincidunt molestie nisl et sollicitudin?",
      odgovor: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices posuere est. In ultricies fermentum velit non finibus. Phasellus ultricies purus purus, eget sagittis ex suscipit id. Aenean laoreet felis et elit finibus, vel vulputate nisi mollis. Aenean facilisis lorem vitae sem tincidunt rhoncus. Suspendisse consequat leo id semper ullamcorper. In lectus sapien, porttitor eu nulla et, sodales ornare tellus.`,
    },
  ];
  return (
    <section className={styles.Wrapper}>
      <img src="najcescaPitanja.svg" />
      <h2 className="mt-4 text-3xl font-bold">Common questions</h2>
      <div className="mt-8">
        {pitanja.map((data, index) => (
          <Question key={index} num={index + 1} pitanje={data.pitanje} odgovor={data.odgovor} />
        ))}
      </div>
    </section>
  );
}

export default CommonQuestions;
