var questions = [
    {
      question: "Here's a default question",
      answers: [
        {
          answer: "Answer one",
          resultID: 0,
        },
        {
          answer: "Answer two",
          resultID: 1,
        },
        {
          answer: "Answer three",
          resultID: 2,
        },
      ],
    },
    {
      question: "Let's add some background and font colors",
      backgroundColor: "rgb(211, 211, 211)",
      fontColor: "#000",
      answers: [
        {
          answer: "First answer",
          backgroundColor: "red",
          fontColor: "rgb(215, 215, 215)",
          resultID: 0,
        },
        {
          answer: "Second answer",
          backgroundColor: "orange",
          fontColor: "green",
          resultID: 1,
        },
        {
          answer: "Third answer",
          backgroundColor: "yellow",
          fontColor: "#000",
          resultID: 2,
          revealResponse: {
             title: "Here's an answer response!",
             description: "Here's a description for the answer response!",
             //image: ResponseImage,
             imageAttribution: "Answer response image attribution text goes here",
          },
        },
      ],
    },
    {
      question: "Here is some overlapping image text",
      questionRelativeToImage: "overlap",
      imageAttribution: "Question image attribution text goes here",
      answerArrangement: "tile",
      //backgroundImageSrc: BackgroundImage,
      answers: [
        {
          answer: "This answer has a background photo",
          resultID: 0,
          //backgroundImageSrc: BackgroundImage,
          imageAttribution: "Answer photo attribution text goes here",
        },
        {
          answer: "Not this one, though",
          resultID: 1,
          backgroundColor: "rgb(238,243,247)",
          fontColor: "rgb(53,51,48)",
        },
        {
          answer: "Not this one, either",
          resultID: 2,
          backgroundColor: "rgb(238,243,247)",
          fontColor: "rgb(53,51,48)",
        },
      ],
    },
    {
      question: "Here is some adjacent image text",
      questionRelativeToImage: "adjacent",
      answerArrangement: "row",
      //backgroundImageSrc: BackgroundImage,
      answers: [
        {
          answer: "Answer one",
          resultID: 0,
        },
        {
          answer: "Answer two",
          resultID: 1,
        },
        {
          answer: "Answer three",
          resultID: 2,
        },
      ],
    },
    {
      question: "Answers can also trigger a callback function",
      answers: [
        {
          answer: "This one does not trigger a function",
          resultID: 0,
        },
        {
          answer: "Click for answer function",
          onAnswerSelection: (questionIndex, answerIndex, resultID) =>
            alert("This alert is caused by an answer selection!"),
          resultID: 1,
        },
      ],
    },
  ];

export default questions;