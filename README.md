<h1 align="center">gnostic</h1>
<p align="center">
    <a title='Build Status' href="https://travis-ci.org/PolyformsRobots/gnostic">
        <img src='https://travis-ci.org/PolyformsRobots/gnostic.svg?branch=master' alt='travis Status' />
    </a>
    <a title='coveralls Status' href='https://coveralls.io/r/PolyformsRobots/gnostic'>
        <img src='https://img.shields.io/coveralls/PolyformsRobots/gnostic.svg' alt='Coverage Status' />
    </a>
</p>
<p align="center">
    <a title='blog' href='http://polyforms.net/bots'>
       <img src='https://img.shields.io/badge/style-blog-blue.svg?label=my' alt='blog' />
    </a>
</p>

## About gnostic
>gnostic is a  node.js slack bot.
General knowledge.

## Bot Command list

* Just to start type hello in the general chat after invited the bot in it
   
    ``` hello  ```


## Install Getting Started
1. Create a new [bot integration](https://my.slack.com/services/new/bot)
1. Choose between **One-Click Heroku** or **Manual Heroku**

 - **One-Click Heroku**
       Click this button:

       [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

 - **Manual Heroku**
    *  Install [Heroku toolbelt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
    * Create a new bot integration (as above)
    *  `heroku create`
    *  `heroku config:set TOKEN_SLACK=[Your Slack bot integration token (obtainable at https://my.slack.com/services/new/bot)]`
    *  `git push heroku master`


## Development

* To test gnostic

    ```$ npm run-script test```

* To debug gnostic

    ```$ npm run-script debug```

* To see the test coverage gnostic

    ```$ npm run-script coverage```

* To run gnostic on your machine

    ```$ npm run-script start```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b gnostic`
3. Commit your changes: `git commit -a `
4. Push to the branch: `git push origin gnostic`
5. Submit a pull request

## History

For detailed changelog, check [Releases](https://github.com/PolyformsRobots/gnostic/releases).

### Contributors

Contributor | GitHub profile | 
--- | --- | ---
David Thompson  (Creator) | [PolyformsRobots](https://github.com/PolyformsRobots) | 

