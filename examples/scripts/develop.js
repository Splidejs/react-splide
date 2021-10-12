const chokidar         = require( 'chokidar' );
const { buildExample } = require( './build-example' );


chokidar.watch( [ './src/js/**/*.tsx', './src/js/**/*.ts' ] ).on( 'change', async () => {
  console.log( 'Building App...' );
  await buildExample();
  console.log( 'Finished' );
} );
