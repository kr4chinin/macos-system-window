# macOS System Window 💻

A simplified recreation of **macOS's** dark-themed **home screen**, featuring functional UI components and a special emphasis on the **system window**. This window is fully interactive, allowing users to effortlessly drag, resize, and utilize various other features typically found in native macOS window components. [Vercel Deployment](https://macos-system-window.vercel.app).

🚨 The background image has a really **high resolution**, which might result in a slight delay while the page fully loads. Please allow a few seconds for optimal display.

* 🔗 Vercel deployment – [macOS System Window](https://macos-system-window.vercel.app)
* 🏗️ CodeSandbox – [macOS System Window Sandbox](https://codesandbox.io/p/sandbox/github/kr4chinin/macos-system-window/tree/main)

![Home screen](https://github.com/kr4chinin/macos-system-window/assets/103210607/be8eb8ac-7a35-45e1-bbb4-d1cb0f80e616)

## Introduction

Run the application 
```
npm install
npm start
```

The **main** **objective** of this project was to meticulously reverse-engineer one of macOS's most renowned interfaces, all without relying on any pre-existing templates. My aim was to preserve the core functionality of the user interface as faithfully as possible but simplify it where necessary.

Highlighted features of this project include:

* A **draggable** and **resizable** system window, which offers a pseudo full-screen mode, the ability to resize and hide the sidebar (automatically hidden when the modal reaches a certain minimal size, and restored upon returning to the normal size);
* Fold/unfold **directories**, choose different directories;

![Hide navbar on resize, fold/unfold dirs functionality](https://github.com/kr4chinin/macos-system-window/assets/103210607/cf634daf-dc91-4dbc-8bdd-fe4d16d2c0c0)

* Functional navbar with **dynamic** dropdown **content** options;
  
![Navbar dropdowns](https://github.com/kr4chinin/macos-system-window/assets/103210607/78c8674f-92c9-4c16-9ba0-8548024c35ae)

* Interactive controls for navigating back and forward within directories;
* Dock with informative tooltips. Clicking on the _Finder_ icon will reopen the modal if it was previously closed.

### Tech stack

* React + Typescript, Vite;
* Mantine;
* styled-components;
* react-rnd;
* react-resizable-panels;
* faker.js.

<img width="1728" alt="Another home screen view with different modal size" src="https://github.com/kr4chinin/macos-system-window/assets/103210607/0d523d81-4422-43c0-86c6-b7dc95be4f1b">




