# macOS System Window 💻

A simplified recreation of **macOS's** dark-themed **home screen**, featuring functional UI components and a special emphasis on the **system window**. This window is fully interactive, allowing users to effortlessly drag, resize, and utilize various other features typically found in native macOS window components. [Vercel Deployment](macos-system-window.vercel.app).

![Home screen](https://github.com/kr4chinin/apple-system-window/assets/103210607/8416aa1e-fee7-4e64-8a77-226b0a616223)

## Introduction

The **main** **objective** of this project was to meticulously reverse-engineer one of macOS's most renowned interfaces, all without relying on any pre-existing templates. My aim was to preserve the core functionality of the user interface as faithfully as possible but simplify it where necessary.

Highlighted features of this project include:

* A **draggable** and **resizable** system window, which offers a pseudo full-screen mode, the ability to resize and hide the sidebar (automatically hidden when the modal reaches a certain minimal size, and restored upon returning to the normal size);
* Fold/unfold **directories**, choose different directories;

![Hide navbar on resize, fold/unfold dirs functionality](https://github.com/kr4chinin/apple-system-window/assets/103210607/ddff3ba2-da4a-4ecf-93b4-c0db9c30da86)

* Functional navbar with **dynamic** dropdown **content** options;
  
![Navbar dropdowns](https://github.com/kr4chinin/apple-system-window/assets/103210607/fb81152d-0c5a-4b4f-9a02-3ace635c7810)

* Interactive controls for navigating back and forward within directories;
* Dock with informative tooltips. Clicking on the _Finder_ icon will reopen the modal if it was previously closed.

### Tech stack

* React + Typescript, Vite;
* Mantine;
* styled-components;
* react-rnd;
* react-resizable-panels;
* faker.js.

<img width="1728" alt="Another home screen view with different modal size" src="https://github.com/kr4chinin/apple-system-window/assets/103210607/94728d5a-760c-41de-ab3a-8ef7d4147944">




