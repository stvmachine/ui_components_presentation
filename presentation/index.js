import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Notes,
  CodePane,
  S
} from 'spectacle';

// import Terminal from 'spectacle-terminal';
// import Typist from 'react-typist';
// import { ScaleLoader } from 'react-spinners';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import { EmojioneV4 } from 'react-emoji-render';

// Require CSS
import 'normalize.css';
import './style.css';

const images = {
  // personal info
  personalInfo: require('../assets/personal-info.png'),

  // logos FE
  reactLogo: require('../assets/logos/react_logo.png'),
  vueLogo: require('../assets/logos/vue_logo.png'),
  angularLogo: require('../assets/logos/angular_logo.png'),

  // CDD
  // eslint-disable-next-line camelcase
  cdd1_1: require('../assets/CDD/1-1.png'),
  // eslint-disable-next-line camelcase
  cdd1_2: require('../assets/CDD/1-2.png'),
  // eslint-disable-next-line camelcase
  cdd2_1: require('../assets/CDD/2-1.png'),
  // eslint-disable-next-line camelcase
  cdd2_2: require('../assets/CDD/2-2.png'),
  // eslint-disable-next-line camelcase
  cdd2_3: require('../assets/CDD/2-3.png'),
  // eslint-disable-next-line camelcase
  cdd2_4: require('../assets/CDD/2-4.png'),
  // eslint-disable-next-line camelcase
  cdd2_5: require('../assets/CDD/2-5.png'),
  // eslint-disable-next-line camelcase
  cdd3_1: require('../assets/CDD/3-1.png'),
  // eslint-disable-next-line camelcase
  cdd3_2: require('../assets/CDD/3-2.png'),
  // eslint-disable-next-line camelcase
  cdd3_3: require('../assets/CDD/3-3.png'),
  // eslint-disable-next-line camelcase
  cdd3_4: require('../assets/CDD/3-4.png'),
  cdd4: require('../assets/CDD/4.png'),
  cdd5: require('../assets/CDD/5.png'),
  cdd6: require('../assets/CDD/6.png'),

  // Explanation Components Explorers
  storeFrontAndWorkshopGroups: require('../assets/storefront_and_workshop.png'),

  // logos UI components tools
  doczLogo: require('../assets/logos/docz.svg'),
  reactCosmosLogo: require('../assets/logos/react_cosmos.png'),
  reactStyleguidistLogo: require('../assets/logos/react_styleguidist.svg'),
  storybookLogo: require('../assets/logos/storybook.svg'),

  // storybook
  advancedConfig: require('../assets/storybook/advanced-config.png'),
  basicConfig: require('../assets/storybook/basic-config.png'),
  basicStory: require('../assets/storybook/basic-story.png'),
  buildStorybook: require('../assets/storybook/build-storybook.png'),
  customWebpack: require('../assets/storybook/custom-webpack.png'),
  folderStructure: require('../assets/storybook/folder-structure.png'),

  // examples
  storybookIntro: require('../assets/storybook/storybook-intro.gif'),
  storybookExample: require('../assets/storybook/storybook-example.png'),
  doczExample: require('../assets/docz/docz_example.png'),
  reactStyleguidistExample: require('../assets/styleguidist/react_styleguidist_example.gif'),
  reactCosmosExample: require('../assets/cosmos/react_cosmos_example.gif'),

  // monkey island references
  dailyFarmer: require('../assets/daily_farmer.gif'),
  monkeyIslandFire: require('../assets/monkey-island.gif')
};
preloader({
  images
});

const slideProps = {
  bgColor: 'background',
  progressColor: 'tertiary',
  transition: ['fade']
};

// const cursor = {
//   show: false,
//   blink: true,
//   element: '|',
//   hideWhenDone: false,
//   hideWhenDoneDelay: 1000
// };

// const Tick = () => <span style={{ color: '#33B969' }}>✓</span>;
// const Info = () => <span style={{ color: '#33B969' }}>info</span>;

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck contentHeight={1000} contentWidth={1150} theme={theme}>
        <Slide {...slideProps} transition={['zoom']}>
          <Appear fid="1">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              {'UI Components explorers'}
            </Heading>
          </Appear>
          <Appear fid="1">
            <div>
              <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
                why we need more tools?
                <EmojioneV4 text=":tired_face:" />
              </Text>
            </div>
          </Appear>

          <Notes>
            <h3>Why we need more tools?</h3>
            <ul>
              <li>browser developer tools</li>
              <li>code editor</li>
              <li>and lots of coffee</li>
              <li>so, why do you need more tools</li>
            </ul>
          </Notes>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="background"
          bgImage={images.personalInfo}
          bgSize="cover"
          bgRepeat="no-repeat"
        />
        <Slide {...slideProps}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Motivation
          </Heading>
          <List textColor="secondary">
            <Appear fid="1">
              <ListItem>
                Transition of <b>page</b> to <b>component</b> development:
                <div
                  style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={images.reactLogo}
                    height="150px"
                    style={{ objectFit: 'cover' }}
                  />
                  <img
                    src={images.vueLogo}
                    height="110px"
                    style={{ marginRight: '15px' }}
                  />
                  <img src={images.angularLogo} height="150px" />
                </div>
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>
                <S type="bold">Bottom up construction:</S> Identity ->
                Elements-> Components-> Composition -> Layout -> Pages
              </ListItem>
            </Appear>
          </List>

          <Notes>
            <ul>
              <li>
                Trend in frontend UI development towards <b>components</b>
              </li>
              <li>
                React, Angular 2, Vue has established patterns for building UIs
                out of well specified components parts
              </li>

              <li>
                Component-Driven Development (CDD) is a development methodology
                that anchors the build process around components. It is a
                process that builds UIs from the “bottom up” by starting at the
                level of components and ending at the level of pages or screens.
              </li>
              <li>
                {
                  'So rather than building a component “on-site” of the app screen where it is first used, you use a tool that isolates the one component.'
                }
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide {...slideProps}>
          <Heading
            size={3}
            textColor="primary"
            style={{ marginBottom: '20px' }}
          >
            1. Identity
          </Heading>
          <div style={{ display: 'flex',
            justifyContent: 'space-between' }}
          >
            <img
              src={images.cdd1_1}
              height="600px"
              style={{ marginRight: '20px' }}
            />
            <img src={images.cdd1_2} height="600px" />
          </div>
        </Slide>

        <Slide {...slideProps}>
          <Heading
            size={3}
            textColor="primary"
            style={{ marginBottom: '20px' }}
          >
            2. Elements
          </Heading>
          <div style={{ display: 'flex',
            justifyContent: 'space-between' }}
          >
            <img src={images.cdd2_1} height="200px" style={{ margin: '5px' }} />
          </div>
          <div style={{ display: 'flex',
            justifyContent: 'space-between' }}
          >
            <img src={images.cdd2_2} height="300px" style={{ margin: '5px' }} />
            <div style={{ display: 'flex',
              flexDirection: 'column' }}
            >
              <img
                src={images.cdd2_3}
                height="100px"
                style={{ margin: '5px' }}
              />
              <img
                src={images.cdd2_5}
                height="150px"
                style={{ margin: '5px' }}
              />
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <img
              src={images.cdd2_4}
              height="100px"
              style={{ margin: '5px',
                objectFit: 'contain' }}
            />
          </div>
        </Slide>

        <Slide {...slideProps}>
          <Heading
            size={3}
            textColor="primary"
            style={{ marginBottom: '20px' }}
          >
            3. Components
          </Heading>
          <div style={{ display: 'flex',
            flexDirection: 'column' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={images.cdd3_2}
                height="500px"
                style={{ objectFit: 'contain',
                  marginRight: '10px' }}
              />
              <div style={{ display: 'flex',
                flexDirection: 'column' }}
              >
                <img
                  src={images.cdd3_4}
                  height="500px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={3} textColor="primary">
            4. Composition
          </Heading>
          <img src={images.cdd4} height="600px" />
        </Slide>

        <Slide {...slideProps}>
          <Heading
            size={3}
            textColor="primary"
            style={{ marginBottom: '50px' }}
          >
            5. Layout
          </Heading>
          <img src={images.cdd5} height="320px" />
        </Slide>

        <Slide {...slideProps}>
          <Heading
            size={3}
            textColor="primary"
            style={{ marginBottom: '30px' }}
          >
            6. Page
          </Heading>
          <img src={images.cdd6} height="700px" />
        </Slide>

        <Slide {...slideProps}>
          <Heading textColor="primary" lineHeight={2} size={2}>
            Benefits
          </Heading>
          <List>
            <Appear fid={1}>
              <ListItem>
                Break-down complexity <EmojioneV4 text=":bread: :thumbsdown:" />
              </ListItem>
            </Appear>
            <Appear fid={2}>
              <ListItem>Isolate from bussiness logic 🏝️</ListItem>
            </Appear>
            <Appear fid={3}>
              <ListItem>
                Increase reusability of components <EmojioneV4 text=":link:" />
              </ListItem>
            </Appear>
            <Appear fid={4}>
              <ListItem>
                More easy to test and debug <EmojioneV4 text=":mag_right:" />
              </ListItem>
            </Appear>
            <Appear fid={5}>
              <ListItem>
                <EmojioneV4 text="Speed projects :running:" />
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide {...slideProps}>
          {/* <Appear>
  <div></div>
          <div style={{background: "white"}}>
            <img src={images.storeFrontAndWorkshopGroups}/>
          </div>
          </Appear> */}

          <Heading size={1} caps fit textColor="primary">
            Components Explorers
          </Heading>

          <Appear fid="1">
            <Text>
              <S type="bold">Definition:</S> Tools to work with a single
              component in isolation.
            </Text>
          </Appear>

          <Appear fid="2">
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <img src={images.reactStyleguidistLogo} height="250px" />

                <img src={images.storybookLogo} height="110px" />
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <img
                  src={images.doczLogo}
                  height="110px"
                  style={{ paddingRight: '40px' }}
                />

                <img src={images.reactCosmosLogo} height="180px" />
              </div>
            </div>
          </Appear>
        </Slide>

        {/* <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            Agenda
          </Heading>
          <List textColor="secondary">
            <ListItem>Style guide and playgrounds</ListItem>
            <ListItem>What it is available:
              <List>
                <ListItem>Storybook</ListItem>
                <ListItem>Docz</ListItem>
                <ListItem>React cosmos</ListItem>
              </List>
            </ListItem>

          </List>
        </Slide> */}

        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            Storybook <EmojioneV4 text=":crown:" />
          </Heading>
          <List textColor="secondary">
            <ListItem>The most widely adopted</ListItem>
            <ListItem>Project mature and active community</ListItem>
            <ListItem>
              <b>Highly customizable</b> via Addons
            </ListItem>
            <ListItem>
              Integrates <b>Jest</b> snapshot testing for all stories
            </ListItem>
          </List>
        </Slide>
        {/* <Slide {...slideProps}>
          <Heading size={2} textColor="primary">
            What is Storybook?
          </Heading>
          <Text margin="20px" textColor="secondary" size={3} fit>
            UI development environment to visualize components
          </Text>
          <img src={images.storybookIntro} height="450px" />
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
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    color: '#9D9D9D'
                  }}
                >
                  <ScaleLoader color="#9D9D9D" loading height={15} />
                  <p
                    style={{
                      margin: 0,
                      marginLeft: '0.5em'
                    }}
                  >
                    Installing dependencies...
                  </p>
                </div>,
                <div style={{ color: '#33B969' }} key="installed">
                  ⚡️ Dependencies installed!
                </div>
              ],
              <Typist key="getstorybook" cursor={cursor}>
                getstorybook
              </Typist>,
              <p key="simplest-way">
                <span
                  style={{
                    backgroundColor: '#9D9D9D',
                    marginLeft: '5px'
                  }}
                >
                  getstorybook - the simplest way to add a storybook to your
                  project.
                </span>
              </p>,
              <span
                key="step-1"
                style={{
                  marginLeft: '5px',
                  color: '#9D9D9D'
                }}
              >
                • Detecting project type. <Tick />
              </span>,
              <span
                key="step-2"
                style={{
                  marginLeft: '5px',
                  color: '#9D9D9D'
                }}
              >
                • Adding storybook support to your "Create React App" based
                project. <Tick />
              </span>,
              <span
                key="step-3"
                style={{
                  marginLeft: '5px',
                  color: '#9D9D9D'
                }}
              >
                • Preparing to install dependencies. <Tick />
              </span>,
              <div
                key="yarn-install"
                style={{
                  marginLeft: '10px',
                  lineHeight: '10px',
                  color: '#9D9D9D'
                }}
              >
                <p>yarn install v1.5.1</p>
                <p>[1/4] 🔍 Resolving packages...</p>
                <p>[2/4] 🚚 Fetching packages...</p>
                <p>[3/4] 🔗 Linking dependencies...</p>
                <p>[4/4] 📃 Building fresh packages...</p>
                <p>
                  <span style={{ color: '#33B969' }}>success</span> Saved
                  lockfile.
                </p>
                <p>✨ Done in 20.59s.</p>
              </div>,
              <span
                key="step-4"
                style={{
                  marginLeft: '5px',
                  color: '#9D9D9D'
                }}
              >
                • Installing dependencies. <Tick />
              </span>,
              <div
                key="step-5"
                style={{
                  marginLeft: '5px',
                  color: '#9D9D9D'
                }}
              >
                <p>To run your storybook, type:</p>
                <span
                  style={{
                    marginLeft: '10px',
                    backgroundColor: '#9D9D9D',
                    color: '#FFFFFF'
                  }}
                >
                  yarn run storybook
                </span>
                <p>
                  For more information visit:{' '}
                  <a style={{ color: '#21ADDD' }}>https://storybook.js.org</a>
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
                    marginLeft: '10px',
                    lineHeight: '10px',
                    color: '#9D9D9D'
                  }}
                >
                  <p>yarn run v1.5.1</p>
                  <p style={{ color: '#707070' }}>
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
                    <Info /> Storybook started on =>{' '}
                    <a style={{ color: '#21ADDD' }}>http://localhost:9009/</a>
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
        </Slide>*/}
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 20px">
            Writing a story
          </Heading>
          <img src={images.basicStory} width="100%" />
        </Slide>

        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 20px">
            Result
          </Heading>
          <img src={images.storybookExample} width="100%" />
        </Slide>
        {/* <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 30px">
            Sample config
          </Heading>
          <img src={images.basicConfig} />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 30px">
            Advanced config
          </Heading>
          <img src={images.advancedConfig} width="100%"/>
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 30px">
            Custom webpack
          </Heading>
          <img src={images.customWebpack} width="100%" />
        </Slide>
        <Slide {...slideProps}>
          <Heading size={1} textColor="primary" margin="0 0 30px">
            Static export
          </Heading>
          <img src={images.buildStorybook} width="100%" />
          </Slide>*/}

        {/* Docz Slides */}
        <Slide {...slideProps}>
          <img
            src={images.doczLogo}
            height="110px"
            style={{ objectFit: 'cover' }}
          />
          <img
            src={images.doczExample}
            width="100%"
            style={{ objectFit: 'cover' }}
          />
        </Slide>
        <CodeSlide
          transition={['fade']}
          lang="jsx"
          textSize=".8em"
          // eslint-disable-next-line import/no-unresolved
          code={require('raw-loader!../assets/docz/code-example')}
          ranges={[
            {
              loc: [0, 270],
              title: 'Walking through some code'
            },
            {
              loc: [0, 4],
              title: 'The beginning'
            },
            {
              loc: [5, 8],
              title: 'Necessary dependencies'
            },
            {
              loc: [8, 19],
              title: 'Comments'
            },
            {
              loc: [19, 22],
              title: 'Props Table'
            },
            {
              loc: [23, 29],
              title: 'Basic Usage'
            },
            { loc: [29, 37] },
            { loc: [37, 47] },
            { loc: [47, 57] }
          ]}
        />

        {/* React Cosmos Slides*/}
        <Slide {...slideProps}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Heading size={3} textColor="primary" style={{ margin: '0' }}>
              React-cosmos
            </Heading>
            <img
              src={images.reactCosmosLogo}
              height="120px"
              style={{ marginLeft: '50px' }}
            />
          </div>
          <img
            src={images.reactCosmosExample}
            width="100%"
            style={{ objectFit: 'cover' }}
          />
        </Slide>

        <Slide {...slideProps}>
          <Heading size={3}>
            <Text textColor="primary" textSize="72px">
              Cosmos is
            </Text>
            <S type="bold" textColor="secondary">
              dev tool first
            </S>
            <EmojioneV4 text=":construction_worker: " />{' '}
          </Heading>
          <List>
            <ListItem>
              Allows any combination of props, context and state
            </ListItem>
            <ListItem>
              Mock every external dependency (eg. API responses, localStorage,
              etc)
            </ListItem>
            <ListItem>
              See app state evolve in real-time while interacting with running
              instances
            </ListItem>
          </List>
        </Slide>
        <Slide {...slideProps} transition={['zoom']}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            {'Fixture react-cosmos'}
          </Heading>
          <CodePane
            lang="json"
            textSize="24px"
            source={`
          {
            props: {}
            url: '/dashboard',
            
            localStorage: {
              name: 'Dan'
            },
            
            reduxState: {},
            
            fetch: [
              {
                matcher: '/api/login',
                response: {
                  name: 'Dan'
                }
              }
            ]
          }
          `}
          />
        </Slide>

        <CodeSlide
          textSize=".8em"
          ranges={[
            {
              loc: [0, 17],
              title: <EmojioneV4 text="Cosmos :heart: enzyme" size={32} />
            },
            { loc: [0, 5] },
            { loc: [5, 10] },
            { loc: [10, 17],
              title: 'It\'s possible to test urls too' }
          ]}
          lang="jsx"
          // eslint-disable-next-line import/no-unresolved
          code={require('raw-loader!../assets/cosmos/code-example')}
        />

        <Slide
          transition={['slide']}
          bgColor="background"
          bgImage={images.dailyFarmer}
          bgSize="contain"
          bgRepeat="no-repeat"
        />
      </Deck>
    );
  }
}
