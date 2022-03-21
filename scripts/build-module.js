const esbuild = require( 'esbuild' );
const name    = 'react-splide';


async function buildScript( format = 'esm' ) {
  return esbuild.build( {
    entryPoints: [ `./src/js/index.ts` ],
    bundle     : true,
    outfile    : `./dist/js/${ name }.${ format }.js`,
    format,
    external   : [ 'react', 'react-dom' ],
    target     : [ 'es2019' ],
  } );
}

async function buildModule() {
  return Promise.all( [
    buildScript(),
    buildScript( 'cjs' ),
  ] );
}

buildModule().catch( console.error );
exports.buildScript = buildScript;
exports.buildModule = buildModule;
