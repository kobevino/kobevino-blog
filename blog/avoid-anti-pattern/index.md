---
title: "Avoid Anti-Patterns"
date: '2024-08-15'
spoiler: "const bigNumber = 123_948_012_394_812"
---

I've been working as a frontend engineer for about 10 years. I think I need to share my experience, which is related to code, with others. Even though everything I share with is not good answers, I hope it should be useful for frontend engineers.

## Get value as number from a number input

```jsx /valueAsNumber/#green
function App() {
  const onChange = (event) => {
    const { value, valueAsNumber } = event.target
    console.log(ParseInt(value)) //  ❌ Bad
    console.log(valueAsNumber) // ✅ Good
  }

  return (
    <div>
      <input type="number" onChange={onChange} />
    </div>
  )
}
```

You can simply get the value as a number without tranforming it.

## Add names to your useEffects in React

```jsx {3-5}
function App() {
  // ❌ Bad
  useEffect(() => {
    // Do something complicated logic
  }, [])

  // ✅ Good
  const configEffect = useCallback(() => {
    // Do something logic
  }, [])

  const anotherEffect = useCallback(() => {
    // Do something logic
  }, []) 

  useEffect(configEffect, [configEffect])
  useEffect(anotherEffect, [anotherEffect])
}
```

I used to write **anonymous functions** when creating `useEffects`. However It took a little bit long time to understand what is going on. We need to deep-dive inside the code. So I strongly recommend it should be _give it a name_ with `useCallback` that maintain its behaviour. As a result, code readability is improved.

## Use numberic separators to keep large numbers readable

```js {2}
const bigNumber = 123948012394812 // ❌ Bad
const bigNumber = 123_948_012_394_812 // ✅ Good
```

It's easy to make sense of large numbers with `_`.

## :is() selector tip

```css {5} {13}
header p, header h2, header button { /* ❌ Bad */
  color: red;
}

header :is(p, h2, button) { /* ✅ Good */
  color: red;
}

header p, footer p, section p { /* ❌ Bad */
  color: red;
}

:is(header, footer, section) p { /* ✅ Good */
  color: red;
}
```

`:is` selector helps to make shorter and more readable code.

## Dealing with union types

```ts
type Profile = {
  age: number;
}

type Information = {
  male: boolean;
}

function getLog(user: Profile | Information) {
  if (user.age) { // ❌ Bad
  }

  if ('age' in user) { // ✅ Good
    console.log(user.age)
  }
}
```

**Union type** is powerful tool, but they can cause some errors. Be careful of union types that have no properties in common.

## Define a component

```jsx
// ❌ Bad
function ParentComponent() {
  function ChildComponent() {

  }
  return <div><ChildComponent /></div>
}

// ✅ Good
function ChildComponent() {

}
function ParentComponent() {
  return <div><ChildComponent /></div>
}
```

Although it's convenient to define a component inside another component, We don't have to define it like this pattern. Because it may cause performance issue. **So define it at the top level of the file or module.**

## Avoid provider wrapping hell

```jsx {18-32}
// ❌ Bad
const root = createRoot(document.getElementById('root'))
root.render(
  <ThemeContext.Provider>
    <UserContext.Provider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <IntlProvider locale={usersLocale}>
            <App />
          </IntlProvider>
        </Provider>
      </QueryClientProvider>
    </UserContext.Provider>
  </ThemeContext.Provider>
)

// ✅ Good
const buildProvidersTree = (componentsWithProps) => {
  const initialComponent = ({ children }) => <>{children}</>
  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        )
      }
    },
    initialComponent
  )
}
const ProvidersTree = buildProvidersTree([
  [ThemeContext.Provider],
  [UserContext.Provider],
  [QueryClientProvider, { client: queryClient }],
  [ReduxProvider, { store }]
  [IntlProvider, { locale: usersLocale }]
])
const root = createRoot(document.getElementById('root'))
root.render(
  <ProvidersTree>
    <App />
  </ProvidersTree>
)
```

Provider wrapping hell is uncomfortable to read code. Instead all providers using composition. It makes all people comfortable.




