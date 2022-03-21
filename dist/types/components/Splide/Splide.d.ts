import { Splide as SplideCore } from '@splidejs/splide';
import React, { ReactNode } from 'react';
import { SplideProps } from '../../types';
/**
 * The class for the Splide React node.
 *
 * @since 0.5.0
 */
export declare class Splide extends React.Component<SplideProps> {
    /**
     * The RefObject for the Splide root element.
     */
    readonly splideRef: React.RefObject<HTMLDivElement>;
    /**
     * Holds the Splide instance.
     */
    splide: SplideCore | undefined;
    /**
     * Holds current options to compare with new ones.
     */
    private options;
    /**
     * Holds the latest slides to compare with new ones.
     */
    private slides;
    /**
     * Called when the component is mounted.
     */
    componentDidMount(): void;
    /**
     * Destroys the splide instance.
     */
    componentWillUnmount(): void;
    /**
     * Updates and/or refreshes the splide when the component is updated.
     */
    componentDidUpdate(): void;
    /**
     * Adds a splide instance to sync with.
     *
     * @param splide - A Splide instance.
     */
    sync(splide: SplideCore): void;
    /**
     * Moves the slider by the specified control pattern.
     *
     * @see Splide#go()
     *
     * @param control - A control pattern.
     */
    go(control: number | string): void;
    /**
     * Returns an array with slide elements.
     *
     * @return An array with slide elements.
     */
    protected getSlides(): HTMLElement[];
    /**
     * Binds event handlers to the splide instance.
     *
     * @param splide - A splide instance.
     */
    protected bind(splide: SplideCore): void;
    /**
     * Omits specified keys from props.
     *
     * @param props - An object with props.
     * @param keys  - An array with keys to omit.
     *
     * @return An object with props without specified keys.
     */
    omit<K extends keyof SplideProps>(props: SplideProps, keys: readonly K[]): Omit<SplideProps, K>;
    /**
     * Render the splide carousel elements.
     *
     * @return A root node.
     */
    render(): ReactNode;
}
//# sourceMappingURL=../../../../src/js/components/Splide/Splide.d.ts.map