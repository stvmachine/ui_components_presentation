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
import './animation.css';

const images = {
  // personal info
  personalInfo2: require('../assets/personal-info-v2.png'),
  octonaut: require('../assets/octonaut.svg'),

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
  // storeFrontAndWorkshopGroups: require('../assets/storefront_and_workshop.png'),

  // logos UI components tools
  doczLogo: require('../assets/logos/docz.svg'),
  reactCosmosLogo: require('../assets/logos/react_cosmos.png'),
  // reactStyleguidistLogo: require('../assets/logos/react_styleguidist.svg'),
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
  // reactStyleguidistExample: require('../assets/styleguidist/react_styleguidist_example.gif'),
  reactCosmosExample: require('../assets/cosmos/react_cosmos_example.gif'),

  // monkey island references
  dailyFarmer: require('../assets/daily_farmer.gif'),
  iWantToBeAPirate: require('../assets/i_want_to_be_a_pirate.png'),
  threeTrials: require('../assets/threeTrials.gif')
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
          bgImage={images.personalInfo2}
          bgSize="cover"
          bgRepeat="no-repeat"
        >
          <img
            className="object-floating"
            src={images.octonaut}
            style={{
              height: '60%',
              width: '40%',
              marginLeft: 'auto',
              objectFit: 'contain'
            }}
          />
        </Slide>

        <Slide {...slideProps}>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Motivation
          </Heading>
          <List textColor="secondary">
            <Appear fid="1">
              <ListItem>
                <b>Trend of UI frameworks</b>
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
                <S type="italic">Component-Driven Development</S>{' '}
                <S type="bold">(CDD)</S>
              </ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>
                <S type="bold">Bottom up construction</S>: Herarchy to compose
                components and a page.
              </ListItem>
            </Appear>
          </List>

          <Notes>
            <ul>
              <li>
                So, why we need more tools?. It's because we have to adapt to
                the times. It is not that we are obligated but we can take
                advantage of it
              </li>
              <li>
                Trend in frontend UI development towards <b>components</b>
              </li>
              <li>
                React, Angular 2, Vue has established patterns for building UIs
                out of well specified components parts
              </li>

              <li>
                CDD is a development methodology that anchors the build process
                around components. It is a process that builds UIs from the
                “bottom up” by starting at the level of components and ending at
                the level of pages or screens.
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
          <Heading textColor="primary" lineHeight={2} size={2}>
            Benefits
          </Heading>
          <List>
            <Appear fid={1}>
              <ListItem textSize="48px" style={{ paddingBottom: '10px' }}>
                Break-down complexity
                <EmojioneV4 text=":bread: :thumbsdown:" />
              </ListItem>
            </Appear>
            <Appear fid={2}>
              <ListItem textSize="48px" style={{ paddingBottom: '10px' }}>
                Isolate from bussiness logic 🏝️
              </ListItem>
            </Appear>
            <Appear fid={3}>
              <ListItem textSize="48px" style={{ paddingBottom: '10px' }}>
                Increase reusability of components
                <EmojioneV4 text=":link:" />
              </ListItem>
            </Appear>
            <Appear fid={4}>
              <ListItem textSize="48px" style={{ paddingBottom: '10px' }}>
                More easy to test and debug <EmojioneV4 text=":mag_right:" />
              </ListItem>
            </Appear>
            <Appear fid={5}>
              <ListItem textSize="48px" style={{ paddingBottom: '10px' }}>
                <EmojioneV4 text="Speed projects :running:" />
              </ListItem>
            </Appear>
          </List>
        </Slide>

        {/* Example bottom up deconstruction*/}
        <Slide {...slideProps}>
          <Heading fit caps size={1} textColor="primary">
            Bottom up construction
          </Heading>
          <Heading caps size={2} textColor="secondary">
            Example
          </Heading>
          <Appear>
            <Heading size={3} textColor="tertiary">
              (totally argueable)
            </Heading>
          </Appear>
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
          <img src={images.cdd6} height="600px" />
        </Slide>

        <Slide
          transition={['zoom']}
          bgColor="black"
          bgImage={images.iWantToBeAPirate}
          bgSize="contain"
          bgRepeat="no-repeat"
          bgPosition="center"
        />

        <Slide
          transition={['zoom']}
          bgColor="black"
          bgImage={images.threeTrials}
          bgSize="contain"
          bgRepeat="no-repeat"
        />

        <Slide {...slideProps}>
          <Heading size={1} caps fit textColor="primary">
            Components Explorers
          </Heading>

          <Appear fid="1">
            <Text style={{ marginTop: '30px' }}>
              <S type="bold">"Definition":</S> Tools to work with a single
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
                <img src={images.storybookLogo} height="120px" />
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
                  style={{ marginTop: '10px',
                    marginRight: '20px' }}
                />

                <img src={images.reactCosmosLogo} height="150px" />
              </div>
            </div>
          </Appear>
        </Slide>

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
            { loc: [37, 47] }
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
          <Heading size={4}>
            <Text textColor="primary" textSize="72px">
              Cosmos is{' '}
              <S type="bold" textColor="secondary">
                dev tool first
              </S>
              <EmojioneV4 text=":construction_worker: " />
            </Text>
          </Heading>
          <List>
            <Appear fid="1">
              <ListItem style={{ marginBottom: '10px' }}>
                Render the component on the <b>starting point needed</b>.
                <EmojioneV4 text=":sunglasses:" />
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem style={{ marginBottom: '10px' }}>
                Allows any combination of props, context and state
              </ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>
                Mock every external dependency e.g.:
                <ul>
                  <li>react context</li>
                  <li>redux</li>
                  <li>react router</li>
                  <li>react apollo (Grahql)</li>
                  <li>localStorage</li>
                  <li>etc</li>
                </ul>
              </ListItem>
            </Appear>
          </List>
          <Notes>
            <ul>
              <li>
                Each proxy does a more or less complex (or hacky) thing in the
                background, things you probably already did before at least once
                in your tests.
              </li>
              <li>
                Mock XHR, or localStorage, or create MemoryRouter by hand, etc.
                But with the fixture system you can compose all mocks using a
                clean unified language (the fixture is JSON for the most part,
                except for functions and any other JS type)
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide {...slideProps} transition={['zoom']}>
          <Heading size={4} fit caps lineHeight={1} textColor="primary">
            {'Fixture react-cosmos'}
          </Heading>
          <CodePane
            lang="json"
            textSize="22px"
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
          bgColor="quaternary"
          bgImage={images.dailyFarmer}
          bgSize="contain"
          bgRepeat="no-repeat"
        />
      </Deck>
    );
  }
}
