import logo from './logo.svg';
import './App.css';
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
import questions from './questions';

function App() {
  console.log(questions);
  return (
    <div className="App">
      <header className="App-header">
      <BuzzFeedQuiz
      title={"Your title goes here."}
      description={"Your description goes here."}
      byline={true}
      bylineAuthor={"Your name"}
      bylineAuthorLink={"www.yourlink.com"}
      bylineAuthorLinkOpenInNewTab={true}
      bylineAuthorTagline={"Your author tagline goes here"}
      autoScroll={true}
      onRestart={() => alert("This alert was triggered by the onRestart prop!")}
      onResult={() => alert("The onResult prop triggered this alert!")}
      onAnswerSelection={(questionIndex, answerIndex, resultID) =>
        console.log({
          questionIndex,
          answerIndex,
          resultID,
        })
      }
      facebookShareButton={true}
      facebookShareLink={"www.yourlink.com"}
      twitterShareButton={true}
      twitterShareLink={"www.yourlink.com"}
      copyShareButton={true}
      copyShareLink={"This text was copied using the copyShareLink prop."}
      questions={questions}
      results={[
        {
          title: "Your first result title goes here",
          description: "Your first result description goes here",
          //resultImageSrc: FirstResultImage,
          imageAttribution: "Your photo attribution text goes here",
          resultID: 0,
        },
        {
          title: "Your second result title goes here",
          description: "Your second result description goes here",
          //resultImageSrc: SecondResultImage,
          resultID: 1,
        },
        {
          title: "Your third result title goes here",
          description: "Result images and attributions are optional!",
          resultID: 2,
        }
      ]}
    
    />
      </header>
    </div>
  );
}

export default App;
