---
title: "How To Dockerize"
date: '2024-08-25'
spoiler: "docker build -t myweb ."
---

I'll introduce how to dockerize app application. It's a little hard to learn the process, if you understand it, you will be first step toward DevOps engineer.

## Create Dockerfile

First, create a next application before Dockerfile. After that, you have to create a Dockerfile in root folder.

```sh
# Initialize next app
$ npx create-next-app@latest
$ yarn add next-runtime-env
$ touch Dockerfile
```

To optimize application, we will config `standalone` mode in outout.

```js /standalone/#green
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

export default nextConfig;
```

But there is an issue. Because the server can't find static files, we have to copy *.next/static* folder in *.next/standalone/.next/* in `standalone` mode. So we have to modify `build` script.

```json {3}
{
  "scripts": {
    "build": "next build && cp -r .next/static .next/standalone/.next/",
  }
}
```

We will insert environment variables dynamicall into application at runtime. To do that, we have to install `next-runtime-env`.

```sh
$ yarn add next-runtime-env
$ touch .env.development
```

```tsx {3} {23}
// layout.tsx
import type { Metadata } from "next";
import { PublicEnvScript } from 'next-runtime-env';
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PublicEnvScript nonce={{ headerKey: 'x-nonce' }} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```

```tsx {1} {7}
import { env } from 'next-runtime-env';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      Hello, {env('HELLO')}
    </main>
  );
}
```

Now, we will write Dockerfile to create a docker image. To optimize docker image, we will use *Multi-Stage* builds. It's helpful to reduce image isze.

```dockerfile {1} {9} {18} /ENV/#green
FROM node:alpine AS base

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

FROM base AS builder

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM base AS runner

WORKDIR /app

COPY --from=builder /app/.next/standalone ./

ENV HELLO KOBE

EXPOSE 3000

CMD [  "sh", "-c", "node server.js" ]
```

Don't forget to assign key and value on `ENV`

```sh
# Create docker image
$ docker build -t myweb .
# Create a container from myweb image and remove the container after exit from the container.
$ docker run --rm -d -p 3001:3000 myweb
```

![running container](./how-to-dockerize/running-container.png)

Finally, It's completed to run container using Dockerfile. But if we use docker-compose.yml, follow the below.

```yml {9}
# docker-compose.yml
version: '3'

services:
  web:
    container_name: test-app
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3001:3000"
    environment:
      - HELLO=KOBEVINO
```

Even though an environment variable is allocated in Dockerfile, we can override the environment variable in docker-compose.yml.

```sh
# create image and run container
$ docker-compose up -d
# remove container
$ docker-compose down
```

![running container](./how-to-dockerize/running-container-2.png)

## Wrap Up

I had a fun weekend this weekend, with Docker. Time flies. It's night. I have to go to work tomorrow. But I think it's meaningful weekend.
