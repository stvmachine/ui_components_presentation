import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text, Notes } from "spectacle";

import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import { ScaleLoader } from "react-spinners";
import CodeSlide from "spectacle-code-slide";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

// Require CSS
import "normalize.css";
import "./style.css";

const images = {
  advancedConfig: require("../assets/advanced-config.png"),
  basicConfig: require("../assets/basic-config.png"),
  basicStory: require("../assets/basic-story.png"),
  buildStorybook: require("../assets/build-storybook.png"),
  customWebpack: require("../assets/custom-webpack.png"),
  folderStructure: require("../assets/folder-structure.png"),
  storybookIntro: require("../assets/storybook-intro.gif")
};
preloader({
  images
});

const slideProps = {
  bgColor: "background",
  progressColor: "tertiary",
  transition: ["fade"]
};

const cursor = {
  show: false,
  blink: true,
  element: "|",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
};

const Tick = () => <span style={{ color: "#33B969" }}>✓</span>;
const Info = () => <span style={{ color: "#33B969" }}>info</span>;

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck contentHeight={1000} contentWidth={1150} theme={theme}>
        <Slide {...slideProps} transition={["zoom"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            {`Styleguids & playgrounds`}
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            why we need more tools?
          </Text>

          <Notes>
            <ul>
              <li>talk about that</li>
              <li>and that</li>
              <li>and then this</li>
            </ul>
          </Notes>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            Agenda
          </Heading>
          <List textColor="secondary">
            <ListItem>Style guide and playgrounds</ListItem>
            <ListItem>What it is available</ListItem>
            <ListItem>Storybook</ListItem>
            <ListItem>Docz</ListItem>
            <ListItem>React cosmos</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            Storybook
          </Heading>
          <List textColor="secondary">
            <ListItem>Project maturity and active community</ListItem>
            <ListItem>Straightforward to setup and maintain</ListItem>
            <ListItem>
              Hot module reload (even for functional stateless components)
            </ListItem>
            <ListItem>
              Allows to inspect events related to your components
            </ListItem>
            <ListItem>
              Allows to edit React props dynamically using the Storybook UI
            </ListItem>
            <ListItem>
              Integrates Jest snapshot testing for all stories
            </ListItem>
            <ListItem>Possibility to further customization via Addons</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            What is Storybook?
          </Heading>
          <Text margin="20px 0 0" textColor="secondary" size={2} fit>
            UI development environment to visualize components
          </Text>
          <img src={images.storybookIntro} height="650px" />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            Setup
          </Heading>
          <br />
          <Terminal
            isMaximized={false}
            title="stevmachine@storybook: ~"
            output={[
              <Typist key="cd-my-proj" cursor={cursor}>
                cd my-project
              </Typist>,
              <Typist key="npm-i-storybook" cursor={cursor}>
                npm i -g @storybook/cli
              </Typist>,
              [
                <div
                  key="loader"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    color: "#9D9D9D"
                  }}
                >
                  <ScaleLoader color="#9D9D9D" loading height={15} />
                  <p
                    style={{
                      margin: 0,
                      marginLeft: "0.5em"
                    }}
                  >
                    Installing dependencies...
                  </p>
                </div>,
                <div style={{ color: "#33B969" }} key="installed">
                  ⚡️ Dependencies installed!
                </div>
              ],
              <Typist key="getstorybook" cursor={cursor}>
                getstorybook
              </Typist>,
              <p key="simplest-way">
                <span
                  style={{
                    backgroundColor: "#9D9D9D",
                    marginLeft: "5px"
                  }}
                >
                  getstorybook - the simplest way to add a storybook to your
                  project.
                </span>
              </p>,
              <span
                key="step-1"
                style={{
                  marginLeft: "5px",
                  color: "#9D9D9D"
                }}
              >
                • Detecting project type. <Tick />
              </span>,
              <span
                key="step-2"
                style={{
                  marginLeft: "5px",
                  color: "#9D9D9D"
                }}
              >
                • Adding storybook support to your "Create React App" based
                project. <Tick />
              </span>,
              <span
                key="step-3"
                style={{
                  marginLeft: "5px",
                  color: "#9D9D9D"
                }}
              >
                • Preparing to install dependencies. <Tick />
              </span>,
              <div
                key="yarn-install"
                style={{
                  marginLeft: "10px",
                  lineHeight: "10px",
                  color: "#9D9D9D"
                }}
              >
                <p>yarn install v1.5.1</p>
                <p>[1/4] 🔍 Resolving packages...</p>
                <p>[2/4] 🚚 Fetching packages...</p>
                <p>[3/4] 🔗 Linking dependencies...</p>
                <p>[4/4] 📃 Building fresh packages...</p>
                <p>
                  <span style={{ color: "#33B969" }}>success</span> Saved
                  lockfile.
                </p>
                <p>✨ Done in 20.59s.</p>
              </div>,
              <span
                key="step-4"
                style={{
                  marginLeft: "5px",
                  color: "#9D9D9D"
                }}
              >
                • Installing dependencies. <Tick />
              </span>,
              <div
                key="step-5"
                style={{
                  marginLeft: "5px",
                  color: "#9D9D9D"
                }}
              >
                <p>To run your storybook, type:</p>
                <span
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "#9D9D9D",
                    color: "#FFFFFF"
                  }}
                >
                  yarn run storybook
                </span>
                <p>
                  For more information visit:{" "}
                  <a style={{ color: "#21ADDD" }}>https://storybook.js.org</a>
                </p>
              </div>,
              [
                <div key="run-storybook">
                  <Typist cursor={cursor}>yarn run storybook</Typist>
                  <br />
                </div>,
                <div
                  key="yarn-run"
                  style={{
                    marginLeft: "10px",
                    lineHeight: "10px",
                    color: "#9D9D9D"
                  }}
                >
                  <p>yarn run v1.5.1</p>
                  <p style={{ color: "#707070" }}>
                    $ start-storybook -p 9009 -s public
                  </p>
                  <p>
                    <Info /> @storybook/react v3.4.1
                  </p>
                  <p>
                    <Info />
                  </p>
                  <p>
                    <Info /> => Loading static files from:
                    /Users/oritorri/Sapient/workshops/test/public .
                  </p>
                  <p>
                    <Info /> => Loading custom addons config.
                  </p>
                  <p>
                    <Info /> => Using default webpack setup based on "Create
                    React App".
                  </p>
                  <p>webpack built ff898fa748423117d134 in 5901ms</p>
                  <p>
                    <Info /> Storybook started on =>{" "}
                    <a style={{ color: "#21ADDD" }}>http://localhost:9009/</a>
                  </p>
                </div>
              ],
              <span key="empty-span" />
            ]}
          />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            Configuration
          </Heading>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 50px">
            Folder structure
          </Heading>
          <img src={images.folderStructure} />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 50px">
            Writing a story
          </Heading>
          <img src={images.basicStory} width="100%" />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 50px">
            Sample config
          </Heading>
          <img src={images.basicConfig} />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 50px">
            Advanced config
          </Heading>
          <img src={images.advancedConfig} width="100%" />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 50px">
            Custom webpack
          </Heading>
          <img src={images.customWebpack} width="100%" />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 50px">
            Static export
          </Heading>
          <img src={images.buildStorybook} width="100%" />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".8em"
          // eslint-disable-next-line import/no-unresolved
          code={require("raw-loader!../assets/deck.example")}
          ranges={[
            {
              loc: [0, 270],
              title: "Walking through some code"
            },
            {
              loc: [0, 4],
              title: "The beginning"
            },
            {
              loc: [5, 8],
              title: "Necessary dependencies"
            },
            {
              loc: [8, 19],
              title: "Comments"
            },
            {
              loc: [19, 22],
              title: "Props Table"
            },
            {
              loc: [23, 29],
              title: "Basic Usage"
            },
            { loc: [29, 37] },
            { loc: [37, 47] },
            { loc: [47, 57] }
          ]}
        />
      </Deck>
    );
  }
}
