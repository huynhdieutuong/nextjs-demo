# Server Side Rendering

## 1. getInitialProps

- Run both on server and client:
  - Run on server when the first time load page
  - The second time (switch page) run on client (SPA)
- Not hide endpoint API

## 2. getServerSideProps

- Run only on server
- Hide endpoint API for secure

### => getInitialProps is faster than getServerSideProps, because getInitialProps still have client rendering, but it is less secure.

<br/>

# Static Generation

## 3. getStaticProps

- Run only on server
- On Dev env, it is the same getServerSideProps (call API whenever load page)
- On Product env, it only call API one time when build code, then data is static

### => So it is very fast, but the data is not updated except rebuild code.

## 4. getStaticPaths

- Run only on server
- Use with getStaticProps for dynamic routes
