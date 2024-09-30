# This is an npm initialized project

Commands used:

1. ```npm init``` - To initialize this as an npm project. Adds project,json
1. ```npm install -D parcel``` - Dev dependency. To install parcel as a bundler. Other bundlers are Vite, Parcel, and Webpack. Also generates package-lock.json to manage transitive dependencies.
1. ```npx parcel index.html``` - To run the project in dev env. To run in production, use ``` npx parcel build index.html```.

Also installed react and reach-dom packages using ```npm install react react-dom```.

### To start this project just run ```npx parcel index.html```.

Note: If you face any issue while running the above command, see below:

<pre>
Q. Error: Expected content key 2d39cdf7c618ab5b(or some random hex code) to exist. 
A. This can be resolved by deleting the .parcel-cache folder.
</pre>

We need to add type="module" to script tag. This will fix the error "import not found" issue.


### NODE_ENV
#

The <b>NODE_ENV</b> environment variable is automatically set by Parcel depending on the mode. When running parcel build, <b>NODE_ENV</b> is set to 'production' by default, otherwise it is set to 'development'. This can be overridden by setting <b>NODE_ENV</b> yourself (e.g. in your shell).

To access an environment variable, read the corresponding property from the process.env object.

<pre>
if (process.env.NODE_ENV === 'development') {
  console.log('Happy developing!');
}
</pre>

You can also use destructuring syntax to access multiple properties at once.

```let {NODE_ENV, API_TOKEN} = process.env;```

Accessing process.env in any non-static ways (e.g. dynamic property lookups) is not supported.

useEffect hook gets invoked after the rendering.

We cannot use useEffect/useState inside if-else, for, while blocks. Using it makes react inconsistent.

ShimmerUI is used to provide better user experience. This can be achieved with just css, without any external modules.

Babel is a compiler, polyfill helps run the new features in old browsers(which doesn't support new features yet.

We can only execute expressions inside the '{}' in js react components. We cannot use statements.

React before V16 uses stacking reconciliation algorithm, which is ineffective(making frames drop and animation inconsistent), and from React 16 onwards, it is replaced by React Fiber, which also uses reconciliation algorithm, but uses React Fiber as datastructure.