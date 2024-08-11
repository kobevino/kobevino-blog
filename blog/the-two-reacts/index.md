---
title: "test"
date: '2024-01-04'
spoiler: "TEST UI = f(data)(state)"
---

Suppose I want to display something on your screen. Whether I want to display a web page like this blog post, an interactive web app, or even a native app that you might download from some app store, at least *two* devices must be involved.

Your device and mine.

It starts with some code and data on *my* device. For example, I am editing this blog post as a file on my laptop. If you see it on your screen, it must have already traveled from my device to yours. At some point, somewhere, my code and data turned into the HTML and JavaScript instructing *your* device to display this.

So how does that relate to React? React is a UI programming paradigm that lets me break down *what* to display (a blog post, a signup form, or even a whole app) into independent pieces called *components*, and compose them like LEGO blocks. I'll assume you already know and like components; check [react.dev](https://react.dev) for an intro.

Components are code, and that code has to run somewhere. But wait--*whose* computer should they run on? Should they run on your computer? Or on mine?

Let's make a case for each side.

---

First, I'll argue that components should run on *your* computer.

Here's a little counter button to demonstrate interactivity. Click it a few times!

```js
<Counter />
```

<Counter />