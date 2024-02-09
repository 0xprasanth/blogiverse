# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.15.0](https://github.com/ptech12/blogiverse/compare/v0.14.4...v0.15.0) (2024-02-09)


### ⚠ BREAKING CHANGES

* **core:** now serving db.json using fake json server and fetching with axios API

### Features

* **core:** convert to json file structure ([f8cbdeb](https://github.com/ptech12/blogiverse/commit/f8cbdeb05cd43566c5f1101b29200534ab9cdf7b))


### Bug Fixes

* **app:** add support lib axios ([99a6492](https://github.com/ptech12/blogiverse/commit/99a649267c115e3b785f38ae2a16716d37907bf2))
* **server:** local json-server up and running ([47a2468](https://github.com/ptech12/blogiverse/commit/47a24686d64ff0c4e614b308f58617a853b39ecd))

### [0.14.4](https://github.com/ptech12/blogiverse/compare/v0.14.3...v0.14.4) (2024-02-09)


### Bug Fixes

* **app:** change length of the post to the length of searchResult ([47adb14](https://github.com/ptech12/blogiverse/commit/47adb1450b27eeda4ec76769f83fc3a27d1d9df8))

### [0.14.3](https://github.com/ptech12/blogiverse/compare/v0.14.2...v0.14.3) (2024-02-08)


### Bug Fixes

* **style:** add styles for NotFound component ([6aa8446](https://github.com/ptech12/blogiverse/commit/6aa8446e425596248e2f3941819c154d6282558c))

### [0.14.2](https://github.com/ptech12/blogiverse/compare/v0.14.1...v0.14.2) (2024-02-08)


### Bug Fixes

* **app:** notfound component finish ([8fd105e](https://github.com/ptech12/blogiverse/commit/8fd105e63ac321ac6b6a15294e1ab6a1dcbd936b))

### [0.14.1](https://github.com/ptech12/blogiverse/compare/v0.14.0...v0.14.1) (2024-02-08)


### Features

* **asset:** add dotted-face emoji to asset directory ([8418a4d](https://github.com/ptech12/blogiverse/commit/8418a4dddf0d48d193254512e3e766e88ccaa855))

## [0.14.0](https://github.com/ptech12/blogiverse/compare/v0.13.1...v0.14.0) (2024-02-08)


### ⚠ BREAKING CHANGES

* **app:** search and filter logic is used in useEffect hooks to automatically refresh onChange

### Features

* **app:** now search and filter items logic add and finished ([260019b](https://github.com/ptech12/blogiverse/commit/260019b57ff64dd2982a347d3137042f0c4dc3ad))

### [0.13.1](https://github.com/ptech12/blogiverse/compare/v0.13.0...v0.13.1) (2024-02-08)


### Bug Fixes

* **app:** add date-fns library support ([4829ff8](https://github.com/ptech12/blogiverse/commit/4829ff820a04d224920ba7af75593832d9d19a08))
* **app:** update and fix handleSubmit function for NewPosts component ([9f0d828](https://github.com/ptech12/blogiverse/commit/9f0d828b2dd848070e326522ea9bdbec3b70d34b))

## [0.13.0](https://github.com/ptech12/blogiverse/compare/v0.12.0...v0.13.0) (2024-02-07)


### ⚠ BREAKING CHANGES

* **app:** a NewPost component to create new posts using form tag along controlled state inputs

### Bug Fixes

* **app:** create NewPost component with form tag ([2f9b9f1](https://github.com/ptech12/blogiverse/commit/2f9b9f127a060cda54b599a493bd8d68c773e328))
* **style:** new styles for new post component ([22f2ef2](https://github.com/ptech12/blogiverse/commit/22f2ef2c036b5c6bf858461d62fd41b93084b797))

## [0.12.0](https://github.com/ptech12/blogiverse/compare/v0.11.0...v0.12.0) (2024-02-07)


### ⚠ BREAKING CHANGES

* **core:** to create new posts, create new state like postTitle, postBody, handleSubmit function
to NewPost component

### Features

* **core:** add handleSubmit, and state to New post component ([feffe9b](https://github.com/ptech12/blogiverse/commit/feffe9b3436ac40e0c2c17aca860ed9a6bb40d6a))

## [0.11.0](https://github.com/ptech12/blogiverse/compare/v0.10.1...v0.11.0) (2024-02-03)


### ⚠ BREAKING CHANGES

* **app:** Nav bar style changes, github link moved up within NAV.

### Bug Fixes

* **app:** nav changes, and styles ([726519b](https://github.com/ptech12/blogiverse/commit/726519b2b9d32592efb6dc1394d684a9570abfaf))

### [0.10.1](https://github.com/ptech12/blogiverse/compare/v0.10.0...v0.10.1) (2024-02-03)


### Bug Fixes

* **app:** add github link ([4514c17](https://github.com/ptech12/blogiverse/commit/4514c178b473b6c06f2de813547d64fa4648a42b))
* **app:** Now footer get the total no. of posts in the app ([87d1642](https://github.com/ptech12/blogiverse/commit/87d16423e9447586d838b09ea48d2456fd1265b0))

## [0.10.0](https://github.com/ptech12/blogiverse/compare/v0.9.1...v0.10.0) (2024-02-02)


### ⚠ BREAKING CHANGES

* **app:** we set to use react-router-dom@v6 that uses most advanced feature to implement the routes and route components

### Features

* **app:** Majoy Layout changes with Outlet component ([73a9bf3](https://github.com/ptech12/blogiverse/commit/73a9bf35cab16f650e706eb4cfc2b6f45c5cd5f2))


### Bug Fixes

* **app:** minor react-router-dom changes with routes, route ([c8f0cd1](https://github.com/ptech12/blogiverse/commit/c8f0cd1e7c7dfd4b1572388783f619b8ec942441))

### [0.9.1](https://github.com/ptech12/blogiverse/compare/v0.9.0...v0.9.1) (2024-01-31)


### Features

* **app:** add handleDelete function to delete the given post :id ([1572dd8](https://github.com/ptech12/blogiverse/commit/1572dd8273e4b1a89717924818678d55c76e3fc9))
* **app:** create Post Page that displays the posts given the :id as params ([dd82db9](https://github.com/ptech12/blogiverse/commit/dd82db91439d2df70055549dad09eb33606359e7))
* **docs:** add key concepts and future plans ([0e1e4f2](https://github.com/ptech12/blogiverse/commit/0e1e4f2c3432bd0abae50d4747b0e00fbd179fb5))


### Bug Fixes

* **style:** add styles for PostPage with delete button ([b4e50f8](https://github.com/ptech12/blogiverse/commit/b4e50f8f015fef9e64343f3edc74c9298d298823))

## [0.9.0](https://github.com/ptech12/blogiverse/compare/v0.8.1...v0.9.0) (2024-01-30)


### ⚠ BREAKING CHANGES

* **core:** by use of props drill down, I managed to pass data to different components with least error

### Features

* **app:** get the props from parent and display the results ([26bee06](https://github.com/ptech12/blogiverse/commit/26bee06b25f44cd41b5567a9e62b7e72168a6d0b))
* **core:** add new component Feed and Post to display the posts ([48c629c](https://github.com/ptech12/blogiverse/commit/48c629c99848478e30df14c6024b68d97e6afab2))
* **style:** new improved styles for Post and Feed component ([b2dfa74](https://github.com/ptech12/blogiverse/commit/b2dfa74a7667434c64ab2b5284134b4c8cc3682b))
* **style:** new styles for feed component and also for footer component ([658fafe](https://github.com/ptech12/blogiverse/commit/658fafe8c4deea8b70a985ff6009d21324ed18af))


### Bug Fixes

* **data:** add new data such as username and data&time ([c97bc20](https://github.com/ptech12/blogiverse/commit/c97bc20d266778b1ab6127acb8e009c4a07f7350))

### [0.8.1](https://github.com/ptech12/blogiverse/compare/v0.8.0...v0.8.1) (2024-01-30)

## [0.8.0](https://github.com/ptech12/blogiverse/compare/v0.7.2...v0.8.0) (2024-01-30)


### ⚠ BREAKING CHANGES

* **core:** The all new Feed component displays all posts drilled down from Home Component

### Features

* **core:** introduction of new component 'Feed' to display feeds ([e0e5190](https://github.com/ptech12/blogiverse/commit/e0e51906d3a206a6e94f682bd5bd71ee3030d273))

### [0.7.2](https://github.com/ptech12/blogiverse/compare/v0.7.1...v0.7.2) (2024-01-30)


### Features

* **app:** add new useState hook for posts and search lists ([4d676a1](https://github.com/ptech12/blogiverse/commit/4d676a1b77bd6fa6a1674d57b6706a9c2fff04d3))
* **app:** use posts data and handling functions to Nav component ([07b9ff8](https://github.com/ptech12/blogiverse/commit/07b9ff8e13b2dd5c3b6b4556989f6b541d66e9e4))


### Bug Fixes

* **npm:** changes to push only with no tags ([a96f582](https://github.com/ptech12/blogiverse/commit/a96f58271de1aeda1fda262240ceda619f11adf2))
* **style:** new paddings style for search bar ([311a85c](https://github.com/ptech12/blogiverse/commit/311a85cf1fbd4bb76b0fe3778d799597cad7655c))

### [0.7.1](https://github.com/ptech12/blogiverse/compare/v0.7.0...v0.7.1) (2024-01-30)

## [0.7.0](https://github.com/ptech12/blogiverse/compare/v0.6.0...v0.7.0) (2024-01-30)


### ⚠ BREAKING CHANGES

* **core:** by combining release and pushing to github, I have automated the same in single command

### Features

* **app:** add Nav bar ([ebe85ec](https://github.com/ptech12/blogiverse/commit/ebe85ecc7fc4cac94bcb23db25795c957db847e3))
* **core:** add page navigation ([3730edc](https://github.com/ptech12/blogiverse/commit/3730edcb5e06c37e1bbc067dd5fe58ec6769ca62))
* **style:** add nav and header styles. ([d06d877](https://github.com/ptech12/blogiverse/commit/d06d8778331ec84a212f88a95581ef5b21e4bdca))


### Bug Fixes

* **core:** add new script for automated releae ([834726c](https://github.com/ptech12/blogiverse/commit/834726c82d7d24335eb45f12c712cedf068a3f36))

## [0.6.0](https://github.com/ptech12/blogiverse/compare/v0.5.0...v0.6.0) (2024-01-30)


### ⚠ BREAKING CHANGES

* The use of Routes and Route are identify and with help element props instead of component

* feat(core)!!: routes are stable now ([695a486](https://github.com/ptech12/blogiverse/commit/695a486be87b6469d1cd811bb6f2896f37c4d42b))

## [0.5.0](https://github.com/ptech12/blogiverse/compare/v0.4.0...v0.5.0) (2024-01-30)


### ⚠ BREAKING CHANGES

* **core:** use of react v18 and node v18

### Features

* **core:** add router ([3ce09e8](https://github.com/ptech12/blogiverse/commit/3ce09e8daf835949ac10ca89bd594f31aa6a749c))

## [0.4.0](https://github.com/ptech12/blogiverse/compare/v0.3.1...v0.4.0) (2024-01-30)


### ⚠ BREAKING CHANGES

* **core:** react-router-dom support install

### Bug Fixes

* **core:** react-router-dom support install ([87112c2](https://github.com/ptech12/blogiverse/commit/87112c23d376be649b6d0aa2b2dcc8977d6c722f))

### [0.3.1](https://github.com/ptech12/blogiverse/compare/v0.3.0...v0.3.1) (2024-01-30)


### Bug Fixes

* **app:** react-route-dom feature downgrade ([6e78e1b](https://github.com/ptech12/blogiverse/commit/6e78e1ba4d2d03e2262207c6fe2ca55e36dc6acd))
* **app:** remove react-router-dom ([890a1ee](https://github.com/ptech12/blogiverse/commit/890a1eee1708f20ef5873fe933da89e8559ad684))
* **core:** app is back online ([151c733](https://github.com/ptech12/blogiverse/commit/151c733a22e8c66cb5fcddebd5376f8cb0bd628c))
* **core:** Revert to start ([acf1bb8](https://github.com/ptech12/blogiverse/commit/acf1bb8bdfd39b307c88f179f5dd22da39b2147c))

## [0.3.0](https://github.com/ptech12/blogiverse/compare/v0.2.0...v0.3.0) (2024-01-29)


### ⚠ BREAKING CHANGES

* **app:** Add Routes to Route components

### Features

* **app:** Add  and display component ([c7ea90d](https://github.com/ptech12/blogiverse/commit/c7ea90d235f7bf150ba39cd1629c41000ce72273))


### Bug Fixes

* **app:** Add Routes to Route components ([8d96ccd](https://github.com/ptech12/blogiverse/commit/8d96ccd7db8d85d88c4b55f15f2b29a47d9883e3))
* **app:** change from basic to actual definition of elements ([969d542](https://github.com/ptech12/blogiverse/commit/969d542fa3d01bd0f2a27cd4366e609291d58381))

## 0.2.0 (2024-01-29)


### ⚠ BREAKING CHANGES

* **app:** create and define new Components
* **build:** add support with standard-version

### Features

* **app:** create and define new Components ([ebb7aa5](https://github.com/ptech12/blogiverse/commit/ebb7aa522470fa67a1ccda0fce0dbb42a5ca049c))
* **build:** add support with standard-version ([2408e74](https://github.com/ptech12/blogiverse/commit/2408e74689a273f0bd5133c9735ce2139d1a3490))
* Project init in README.md ([ce98104](https://github.com/ptech12/blogiverse/commit/ce9810474ff5195ec643463bd3f9f490e6890051))


### Bug Fixes

* **app:** import all components and error fixes ([b8e408e](https://github.com/ptech12/blogiverse/commit/b8e408ebce19b176263347873f50713e66382e53))
* **doc:** change to bold ([dd5212e](https://github.com/ptech12/blogiverse/commit/dd5212e64d1742432e5d434ac265c5981379fd33))
* **lib:** add react-router-dom lib ([2a7d7f2](https://github.com/ptech12/blogiverse/commit/2a7d7f20a0a04c0f9a8c36249681658be08887f4))
* removed unused files ([aab5da0](https://github.com/ptech12/blogiverse/commit/aab5da06bbe238f1917d225a6d0c3938fdd04bae))
* styles reset ([f7f0430](https://github.com/ptech12/blogiverse/commit/f7f0430d7c53a10d6899d81c239941416d2cfa3f))
