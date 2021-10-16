import { isEqualDeep } from '../isEqualDeep';


describe( 'isEqualDeep', () => {
  test( 'can check if 2 arrays are deeply equal or not.', () => {
    const array1 = [ 1, [ 2, 3 ] ];
    const array2 = [ 1, [ 2, 3 ] ];
    const array3 = [ 1, [ 2, 4 ] ];

    expect( isEqualDeep( array1, array2 ) ).toBe( true );
    expect( isEqualDeep( array1, array3 ) ).toBe( false );
  } );

  test( 'can check if 2 objects are deeply equal or not.', () => {
    const object1 = { a: 1, b: { c: 2, d: true, e: [ 1, 2 ] } };
    const object2 = { a: 1, b: { c: 2, d: true, e: [ 1, 2 ] } };
    const object3 = { a: 1, b: { c: 2, d: true, e: [ 1, 10 ] } };

    expect( isEqualDeep( object1, object2 ) ).toBe( true );
    expect( isEqualDeep( object1, object3 ) ).toBe( false );
  } );

  test( 'can handle complex objects.', () => {
    const object1 = {
      a: 1,
      b: true,
      c: 'x',
      d: [ true, true ],
      e: { e1: 1, e2: [ 1, 2, 3 ] },
    };

    const object2 = {
      a: 1,
      b: true,
      c: 'x',
      d: [ true, true ],
      e: { e1: 1, e2: [ 1, 2, 3 ] },
    };

    const object3 = {
      a: 1,
      b: true,
      c: 'x',
      d: [ true, true ],
      e: { e1: 1, e2: [ 1, 2, 10 ] },
    };

    expect( isEqualDeep( object1, object2 ) ).toBe( true );
    expect( isEqualDeep( object1, object3 ) ).toBe( false );
  } );
} );
