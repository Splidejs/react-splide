/**
 * Combines valid class names.
 *
 * @param classes - An array with classes.
 *
 * @return A concatenated string with provided class names.
 */
export function classNames( ...classes: Array<string | boolean | null | undefined> ): string {
  return classes.filter( Boolean ).join( ' ' );
}
