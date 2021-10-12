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
     * The SplideComponent constructor.
     *
     * @param props = Props.
     */
    constructor(props: SplideProps);
    /**
     * Called when the component is mounted.
     */
    componentDidMount(): void;
    /**
     * Destroys the splide instance.
     */
    componentWillUnmount(): void;
    /**
     * Refreshes the splide when the component is updated.
     */
    componentDidUpdate(): void;
    /**
     * Binds event handlers to the splide instance.
     *
     * @param splide - A splide instance.
     */
    bind(splide: SplideCore): void;
    /**
     * Adds a splide instance to sync with.
     *
     * @param splide - A Splide instance.
     */
    sync(splide: SplideCore): void;
    /**
     * Render the track element.
     *
     * @return A track element node.
     */
    renderTrack(): ReactNode;
    /**
     * Render the splide slider elements.
     *
     * @return A root element.
     */
    render(): ReactNode;
}
//# sourceMappingURL=../../../../src/js/components/Splide/Splide.d.ts.map