This Weather app created by [David Colon Project](https://github.com/dcolonv) as a test for Rindus

## Getting Started

First, clone it

```bash
git clone git@github.com:dcolonv/rindus-weatherapp.git
cd rindus-weatherapp
```

then, copy `.env.example` to `.env` and add values below, then source to shell.

```
NEXT_PUBLIC_WEATHER_API_KEY=<weather_api_key>
```

**You can get this API key from https://www.weatherapi.com/**

then, install and run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## If you want to test it

End 2 End Testing with:

```bash
npm run test:e2e:headless
```

Component Testing with:

```bash
npm run test:component:headless
```
