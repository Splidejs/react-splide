const chokidar        = require( 'chokidar' );
const { buildModule } = require( './build-module' );


chokidar.watch( [ './src/js/**/*.tsx', './src/js/**/*.ts' ] ).on( 'change', async () => {
  console.log( 'Building Script...' );
  await buildModule();
  console.log( 'Finished' );
} );
