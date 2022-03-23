import { Options, Splide as SplideCore } from '@splidejs/splide';
import React, { ReactNode } from 'react';
import { EVENTS } from '../../constants/events';
import { SplideProps } from '../../types';
import { classNames, isEqualDeep, isEqualShallow, merge } from '../../utils';
import { SplideTrack } from '../SplideTrack/SplideTrack';


/**
 * The class for the Splide React node.
 *
 * @since 0.5.0
 */
export class Splide extends React.Component<SplideProps> {
  /**
   * The RefObject for the Splide root element.
   */
  readonly splideRef = React.createRef<HTMLDivElement>();

  /**
   * Holds the Splide instance.
   */
  splide: SplideCore | undefined;

  /**
   * Holds current options to compare with new ones.
   */
  private options: Options | undefined;

  /**
   * Holds the latest slides to compare with new ones.
   */
  private slides: HTMLElement[] = [];

  /**
   * Called when the component is mounted.
   */
  componentDidMount(): void {
    const { options, extensions, transition } = this.props;
    const { current } = this.splideRef;

    if ( current ) {
      this.splide = new SplideCore( current, options );
      this.bind( this.splide );
      this.splide.mount( extensions, transition );

      this.options = merge( {}, options || {} );
      this.slides  = this.getSlides();
    }
  }

  /**
   * Destroys the splide instance.
   */
  componentWillUnmount(): void {
    if ( this.splide ) {
      this.splide.destroy();
      this.splide = undefined;
    }

    this.options = undefined;
    this.slides.length = 0;
  }

  /**
   * Updates and/or refreshes the splide when the component is updated.
   */
  componentDidUpdate(): void {
    if ( ! this.splide ) {
      return;
    }

    const { options } = this.props;

    if ( options && ! isEqualDeep( this.options, options ) ) {
      this.splide.options = options;
      this.options = merge( {}, options );
    }

    const newSlides = this.getSlides();

    if ( ! isEqualShallow( this.slides, newSlides ) ) {
      this.splide.refresh();
      this.slides = newSlides;
    }
  }

  /**
   * Adds a splide instance to sync with.
   *
   * @param splide - A Splide instance.
   */
  sync( splide: SplideCore ): void {
    this.splide?.sync( splide );
  }

  /**
   * Moves the slider by the specified control pattern.
   *
   * @see Splide#go()
   *
   * @param control - A control pattern.
   */
  go( control: number | string ): void {
    this.splide?.go( control );
  }

  /**
   * Returns an array with slide elements.
   *
   * @return An array with slide elements.
   */
  protected getSlides(): HTMLElement[] {
    if ( this.splide ) {
      const children = this.splide.Components.Elements?.list.children;
      return children && Array.prototype.slice.call( children ) || [];
    }

    return [];
  }

  /**
   * Binds event handlers to the splide instance.
   *
   * @param splide - A splide instance.
   */
  protected bind( splide: SplideCore ): void {
    EVENTS.forEach( ( [ event, name ] ) => {
      const handler = this.props[ name ];

      if ( typeof handler === 'function' ) {
        splide.on( event, ( ...args: any[] ) => {
          handler( splide, ...args );
        } );
      }
    } );
  }

  /**
   * Omits specified keys from props.
   *
   * @param props - An object with props.
   * @param keys  - An array with keys to omit.
   *
   * @return An object with props without specified keys.
   */
  omit<K extends keyof SplideProps>( props: SplideProps, keys: readonly K[] ): Omit<SplideProps, K> {
    keys.forEach( key => {
      if ( Object.prototype.hasOwnProperty.call( props, key ) ) {
        delete props[ key ];
      }
    } );

    return props;
  }

  /**
   * Render the splide carousel elements.
   *
   * @return A root node.
   */
  render(): ReactNode {
    const { className, tag: Root = 'div', hasTrack = true, children, ...props } = this.props;

    return (
      <Root
        className={ classNames( 'splide', className ) }
        ref={ this.splideRef }
        { ...this.omit( props, [ 'options', ...EVENTS.map( event => event[ 1 ] ) ] ) }
      >
        { hasTrack ? <SplideTrack>{ children }</SplideTrack> : children }
      </Root>
    );
  }
}
