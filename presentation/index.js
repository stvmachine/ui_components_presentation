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
  S,
  BlockQuote,
  Quote,
  Cite
} from 'spectacle';

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
  cdd1_3: require('../assets/CDD/1-3.png'),
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

  // logos UI components tools
  doczLogo: require('../assets/logos/docz.svg'),
  reactCosmosLogo: require('../assets/logos/react_cosmos.png'),
  storybookLogo: require('../assets/logos/storybook.svg'),

  // examples
  storybookIntro: require('../assets/storybook/storybook-intro.gif'),
  storybookExample: require('../assets/storybook/storybook-example.png'),
  basicStory: require('../assets/storybook/basic-story.png'),
  doczExample: require('../assets/docz/docz_example.png'),
  reactCosmosExample: require('../assets/cosmos/react_cosmos_example.gif'),

  // monkey island references
  treasureMapMI: require('../assets/treasure_map.jpg'),
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
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Motivation
          </Heading>
          <List textColor="secondary">
            <Appear fid="1">
              <ListItem style={{ paddingBottom: '10px' }}>
                <b>Trend on modern UI Frameworks</b>
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
              <ListItem style={{ paddingBottom: '10px' }}>
                Transition of <b>page</b> to <b>component</b> development
              </ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem style={{ paddingBottom: '10px' }}>
                <S type="bold">CDD </S>
                <S type="italic">(Component-driven development)</S>
              </ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem style={{ paddingBottom: '10px' }}>
                <S type="bold">UI Components Explorers:</S> Tools that help to
                compose components (e.g. workshop, styleguide and dev tools).
              </ListItem>
            </Appear>
          </List>

          <Notes>
            <ul>
              <li>
                Trend in frontend UI development towards <b>components</b>
              </li>
              <li>
                So rather than building a component “on-site” of the app screen
                where it is first used, we use a tool that isolates that
                component.
              </li>
              <li>
                Example: Form where you have to activate pressing a button,
                sounds like a pain after some updates
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide {...slideProps}>
          <Heading textColor="primary" lineHeight={2} size={2}>
            Benefits of CDD
          </Heading>
          <List>
            <Appear fid={1}>
              <ListItem textSize="48px" style={{ paddingBottom: '10px' }}>
                Break-down complexity
                <EmojioneV4
                  text=":bread: :thumbsdown:"
                  style={{
                    marginLeft: '5px'
                  }}
                />
              </ListItem>
            </Appear>
            <Appear fid={2}>
              <ListItem textSize="48px" style={{ marginBottom: '10px' }}>
                Isolate from bussiness logic 🏝️
              </ListItem>
            </Appear>
            <Appear fid={3}>
              <ListItem textSize="48px" style={{ marginBottom: '10px' }}>
                Increase re-usability
                <EmojioneV4 text=":link:" />
              </ListItem>
            </Appear>
            <Appear fid={4}>
              <ListItem textSize="48px" style={{ marginBottom: '10px' }}>
                Reduce design and test debt
                <EmojioneV4 text=":mag_right:" />
              </ListItem>
            </Appear>
            <Appear fid={5}>
              <ListItem textSize="48px" style={{ marginBottom: '10px' }}>
                <EmojioneV4 text="Speed projects :running:" />
              </ListItem>
            </Appear>
          </List>
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
        >
          <Notes>I really hope someone understands the reference</Notes>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={1} caps fit textColor="primary">
            Components Explorers
          </Heading>

          <Appear fid="1">
            <div
              style={{
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <img src={images.storybookLogo} height="160px" />

              <img
                src={images.doczLogo}
                height="140px"
                style={{ marginTop: '20px' }}
              />
              <img
                src={images.reactCosmosLogo}
                style={{
                  marginTop: '30px'
                }}
                height="160px"
              />
            </div>
          </Appear>
        </Slide>

        {/* Example bottom up deconstruction*/}
        <Slide {...slideProps}>
          <BlockQuote>
            <Quote> Not everything that shines is a component</Quote>
            <Cite>anonymous</Cite>
          </BlockQuote>

          <Notes>
            {`
            Actually, I can say that at least it is necessary to define 
            some basic elements before thinking about even starting to build the 
            first component.
            `}
          </Notes>
        </Slide>

        <Slide {...slideProps}>
          <Heading fit caps size={1} textColor="primary">
            Bottom up construction
          </Heading>
          <Heading caps size={2} textColor="secondary">
            example
          </Heading>
          <Appear>
            <Heading size={3} textColor="tertiary">
              (totally argueable)
            </Heading>
          </Appear>

          <Notes>
            <ul>
              <li>
                The ultimate goal is to achieve a page...with pages you build
                the app
              </li>
              <li>
                The bottom up construction that i consider is at least 6 levels
              </li>
              <li>Totally argueable</li>
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
            <div style={{ display: 'flex',
              flexDirection: 'column' }}
            >
              <img src={images.cdd1_2} height="500px" />
              <img src={images.cdd1_3} style={{ paddingTop: '30px' }} />
            </div>
          </div>

          <Notes>
            <ul>
              <li>Brand colors</li>
              <li>Typography</li>
              <li>Logos and icons</li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>Inputs</li>
              <li>Buttons</li>
              <li>Paper element for example on the case of Material Design</li>
            </ul>
          </Notes>
          >
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

          <Notes>
            <ul>
              <li>Component: Is a composition of elements more simple</li>
            </ul>
          </Notes>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={3} textColor="primary">
            4. Composition
          </Heading>
          <img src={images.cdd4} height="600px" />

          <Notes>
            <ul>
              <li>
                This level define how we group components that we already
                created. e.g.: lists.
              </li>
              <li>
                It's not yet a page, because we need first define...(next slide)
              </li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>Usually the layout is defined by the design.</li>
              <li>
                But as developers we have to decide the best way to organize the
                space : Flex, bootstrap, CSS grid
              </li>
              <li>
                It's argueable this order, because we usually need responsive
                components and views{' '}
              </li>
              <li>...but is just a guide</li>
            </ul>
          </Notes>
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
          transition={['slide']}
          bgColor="black"
          bgImage={images.treasureMapMI}
          bgSize="contain"
          bgRepeat="no-repeat"
        />

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
            <ListItem>
              Wrap components and allows to test on a safe way
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
                Render on the <b>starting point needed</b>.
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
                  <li>react apollo (GrahQL)</li>
                  <li>localStorage</li>
                  <li>etc</li>
                </ul>
              </ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>
                Render the <b>raw component</b> without wrappers.
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

        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            Conclusions (1/2)
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <b>Storybook:</b>
                <ul>
                  <li>
                    Offers <b>workshop</b> and <b>styleguide</b>
                  </li>
                  <li>
                    Good enought for almost <b>any size</b> of team or project
                  </li>
                  <li>A lot of addons and huge community.</li>
                </ul>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ marginTop: '10px' }}>
                <b>Docz:</b>
                <ul>
                  <li>
                    <b>Posible scenarios</b>: Shared library, high use of
                    propetary components, offer a style guide is the most
                    important.
                  </li>
                  <li>
                    <b>Easy to maintain</b>. With a minimal ammount of code you
                    are done
                  </li>
                </ul>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            Conclusions (2/2)
          </Heading>
          <Heading size={3} textColor="secondary">
            React-cosmos
          </Heading>
          <List>
            <ListItem>
              Want to focus on the <b>debugging</b> and <b>testing</b>.
            </ListItem>
            <ListItem>
              <b>Easily scalable</b> and <b>fixtures</b>.
            </ListItem>
            <ListItem>Mocks or you can use the real API call</ListItem>
            <ListItem>
              <b>Posible scenarios:</b> Multi-steps forms, multiple answers for
              the same component, test coverage is important.
            </ListItem>
          </List>
        </Slide>

        <Slide {...slideProps}>
          <Heading size={1} textColor="primary">
            Links of the examples
          </Heading>
          <List>
            <ListItem>
              <S type="bold">React Cosmos:</S>
              <br />
              https://github.com/stvmachine/react-cosmos-example
            </ListItem>
            <ListItem>
              <S type="bold">Docz</S>:<br />
              https://github.com/stvmachine/typescript_docz_example
            </ListItem>
          </List>
        </Slide>

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
