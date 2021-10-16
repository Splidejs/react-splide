import { isObject } from '../isObject/isObject';


/**
 * Checks if provided two arrays are shallowly equal or not.
 *
 * @param subject1 - An array to test.
 * @param subject2 - Anther array to test.
 *
 * @return `true` if they are considered as equal, or otherwise `false`.
 */
export function isEqualDeep( subject1: unknown, subject2: unknown ): boolean {
  if ( Array.isArray( subject1 ) && Array.isArray( subject2 ) ) {
    return subject1.length === subject2.length
      && ! subject1.some( ( elm, index ) => ! isEqualDeep( elm, subject2[ index ] ) );
  }

  if ( isObject( subject1 ) && isObject( subject2 ) ) {
    const keys1 = Object.keys( subject1 ) as Array<keyof typeof subject1>;
    const keys2 = Object.keys( subject2 );

    return keys1.length === keys2.length && ! keys1.some( key => {
      return ! Object.prototype.hasOwnProperty.call( subject2, key )
      || ! isEqualDeep( subject1[ key ], subject2[ key ] );
    } );
  }

  return subject1 === subject2;
}
