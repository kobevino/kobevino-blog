---
title: "Javascript Tips"
date: '2024-08-15'
spoiler: "uid() // lzv9r2pa6ij4v3lz6jt"
---

I'll share quick tips with javascript. Let's go.


## Create a unique ID

```js
const uid = () => {
  const head = Date.now().toString(36)
  const tail = Math.random().toString(36).substr(2)
  return head + tail
}

uid() // lzv9r2pa6ij4v3lz6jt
```

You don't have to install packages that is related to create unique id.
This is fast and easy way to create unique id using javascript.

## How to implement method chaning

```js
class Person {
  log() {
    console.log(this.is)
    return this
  }
  walk() {
    this.is = 'walking'
    return this
  }
  run() {
    this.is = 'running'
    return this
  }
}

const person = new Person()
person
  .walk()
  .log() // walking
  .run()
  .log() // running
```