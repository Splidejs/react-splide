const esbuild = require( 'esbuild' );

async function buildApp() {
  return esbuild.build( {
    entryPoints: [ `./src/js/app.tsx` ],
    bundle     : true,
    outfile    : `./dist/js/app.js`,
    minify     : true,
  } );
}

async function buildExample() {
  await buildApp();
}

buildExample().catch( e => console.log( e ) );
exports.buildExample = buildExample;
