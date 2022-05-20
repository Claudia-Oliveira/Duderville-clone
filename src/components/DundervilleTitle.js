import styles from './DundervilleTitle.module.scss';
import { gsap } from 'gsap';

import React, { Component, createRef } from 'react';

export default class DundervilleTitle extends Component {
    ui = {
        title: createRef(),
        letterUTop: createRef(),
        letterUBottom: createRef(),
        letterNTop: createRef(),
        letterNBottom: createRef(),
        underlineD: createRef(),
        letterDSecond: createRef(),
        letterR: createRef(),
        letterV: createRef(),
        letterITop: createRef(),
        letterIBottom: createRef(),
        middleLineE: createRef(),
        letterLSecond: createRef(),
        letterESecond: createRef(),
        groupU: createRef(),
        groupN: createRef(),
        groupI: createRef()
    };

    componentDidMount() {
        this._prepareAnimation();

        this._animate();
    }

    componentWillUnmount() {
        this._killTimelines();
    }

    render() {
        return (
            <div className={styles.container}>
                <svg viewBox="0 0 1441.7 183" ref={this.ui.title} className={styles.title}>
                    <rect id="E-bottom" x="1328.9" y="158.2" width="112" height="25.4" />
                    <polygon
                        ref={this.ui.letterESecond}
                        id="E-second"
                        points="1353.5,153.9 1354,181.2 1328.9,181.2 1328.9,-0.2 1440.9,-0.2 1440.9,25.3 1353.5,25.3 1353.5,57 
	1418.1,57 1418.1,81.9 1353.5,81.9 1353.5,153.9 "
                    />
                    <polygon
                        ref={this.ui.letterLSecond}
                        id="L-second"
                        points="1203.7,180.8 1203.7,155.3 1203.7,0.5 1229.3,0.5 1229.3,155.3 1312.3,155.3 1312.3,180.8 
	1229.3,180.8 "
                    />
                    <polygon id="L-first" points="1078.4,180.8 1078.4,155.3 1078.4,0.5 1104,0.5 1104,155.3 1187.1,155.3 1187.1,180.8 1104,180.8 " />
                    <g ref={this.ui.groupI}>
                        <rect ref={this.ui.letterITop} id="I-top" x="1032.7" y="0.5" width="25.6" height="180.3" />
                        <rect ref={this.ui.letterIBottom} id="I-bottom" x="1032.7" y="0.5" width="25.6" height="180.3" />
                    </g>
                    <path ref={this.ui.letterV} id="V" d="M924,182.2c0,0-82.2-180.7-82.2-182.2h30.8l57.7,132.1L986.8,0h31.9l-82.2,182.2H924z" />
                    <g clipPath="url(#theClipPath)">
                        <path
                            ref={this.ui.letterR}
                            id="R"
                            d="M802.9,81.5l72.3,99.5h-30.5c0,0-65.3-95.7-69.5-99.7h-10.5V181h-24.8V0h56.9c0,0,37.9-0.6,37.9,40.9
	C834.7,73.2,812.6,79.7,802.9,81.5L802.9,81.5z M796,23.4h-31.3V58H797c0,0,12.8-0.6,12.8-17.3S796,23.3,796,23.4L796,23.4z"
                        />
                        <clipPath id="theClipPath">
                            <rect x="730" y="0" width="145" height="183.3" opacity="0" />
                        </clipPath>
                    </g>
                    <polygon
                        ref={this.ui.middleLineE}
                        id="middle-line"
                        points="629.7,59.6 629.7,59.6 629.7,59.6 629.7,59.6 629.7,59.6 694.3,59.6 694.3,84.6 629.7,84.6 629.7,84.6 
	629.7,84.6 629.7,84.6 629.7,84.6 "
                    />
                    <polygon
                        ref={this.ui.letterEFirst}
                        points="610.6,0.5 721.7,0.5 721.7,26 635.2,26 635.2,57.6 635.2,57.6 635.2,82.6 635.2,82.6 635.2,154.5 
	721.7,154.5 721.7,181.8 610.6,181.8 "
                    />
                    <rect id="underline-D" x="479.1" y="157.2" width="114.4" height="23.4" />
                    <path
                        ref={this.ui.letterDSecond}
                        id="D"
                        d="M502.1,143.8h-23V0.9l25-0.6c0,0,89.4-9.6,89.4,71.9S502.1,143.8,502.1,143.8L502.1,143.8z M568.5,71.9
	c0-15.3-4.7-27.2-14-35.3c-16.5-14.4-42.9-13.7-51-13.1v97.3c8.1,0,34.6,0.8,51-13.6C563.8,99.2,568.5,87.1,568.5,71.9L568.5,71.9z"
                    />
                    <g ref={this.ui.groupN}>
                        <polygon ref={this.ui.letterNTop} id="N-top" points="337.8,52.5 337.8,183 311.5,183 311.5,0 327.4,0 434.2,127.4 434.2,0 461.4,0 461.4,183 445.7,183 " />
                        <polygon ref={this.ui.letterNBottom} id="N-bottom" points="337.8,52.5 337.8,183 311.5,183 311.5,0 327.4,0 434.2,127.4 434.2,0 461.4,0 461.4,183 445.7,183 " />
                    </g>
                    <g ref={this.ui.groupU}>
                        <path
                            ref={this.ui.letterUTop}
                            id="U-top"
                            d="M237.7,182.2h-17.9c-36.2,0-53.6-28.3-53.6-57.9V0h26v121.8c0,34.9,36.5,34.1,36.5,34.1s36.5,1.5,36.5-33.3V0
	h26v124.3C291.3,153.5,274.6,182.2,237.7,182.2L237.7,182.2z"
                        />
                        <path
                            ref={this.ui.letterUBottom}
                            id="U-bottom"
                            d="M237.7,182.2h-17.9c-36.2,0-53.6-28.3-53.6-57.9V0h26v121.8c0,34.9,36.5,34.1,36.5,34.1s36.5,1.5,36.5-33.3V0
	h26v124.3C291.3,153.5,274.6,182.2,237.7,182.2L237.7,182.2z"
                        />
                    </g>
                    <path
                        id="D-first"
                        d="M29.2,182.8H0V1.2l31.6-0.8c0,0,113.7-12.2,113.7,91.4S29.2,182.8,29.2,182.8z M26.1,26.6v129.8
	c0,0,92,12.9,92-65S26.1,26.6,26.1,26.6z"
                    />
                </svg>
            </div>
        );
    }

    _prepareAnimation() {
        this.ui.letterUTop.current.style.transform = 'translateY(-25%)';
        this.ui.letterUBottom.current.style.transform = 'translateY(80%)';
        this.ui.letterNTop.current.style.transform = 'translateY(-20%)';
        this.ui.letterNBottom.current.style.transform = 'translateY(85%)';
        this.ui.letterDSecond.current.style.transform = 'translateY(105%)';
        this.ui.letterR.current.style.transform = 'translateX(-10%)';
        this.ui.letterITop.current.style.transform = 'translateY(-20%)';
        this.ui.letterIBottom.current.style.transform = 'translateY(85%)';
        this.ui.letterLSecond.current.style.transform = 'translateX(-6%)';
        this.ui.letterESecond.current.style.transform = 'translateY(35%)';
    }

    _animate() {
        const tl = gsap.timeline();

        tl.from(this.ui.title.current, { opacity: 0, y: 20, duration: 0.5, ease: 'sine.inOut' });

        tl.to(this.ui.groupU.current, { y: '-39%', duration: 0.3, ease: 'power4.inOut' });
        tl.fromTo(this.ui.middleLineE.current, { y: '-30%' }, { duration: 0.2, y: '240%' }, '<');
        tl.to(this.ui.middleLineE.current, { y: '0%', duration: 0.2, ease: 'elastic.out(1, 1)' });
        tl.to(this.ui.groupI.current, { y: '-41.5%', duration: 0.95, ease: 'power4.inOut' }, '<');
        tl.to(this.ui.letterDSecond.current, { y: 0, duration: 0.35, ease: 'elastic.out(1, 1)' }, '-=.9');
        tl.to(this.ui.letterR.current, { x: 0, duration: 0.625, ease: 'power4.inOut' }, '-=.9');
        tl.to(this.ui.letterLSecond.current, { x: 0, duration: 0.625, ease: 'power4.inOut' }, '<');
        tl.fromTo(this.ui.letterV.current, { x: -17, y: -2, rotate: 20, transformOrigin: 'top left' }, { x: 0, y: 0, duration: 0.1, rotate: 0, ease: 'power4.inOut' }, '<.4');
        tl.to(this.ui.letterESecond.current, { y: 0, duration: 0.4583, ease: 'power4.inOut' }, '<');
        tl.to(this.ui.groupN.current, { y: '10%', duration: 0.125, ease: 'power4.inOut' }, '+=.5');

        // tl.timeScale(0.2);
    }

    _killTimelines() {
        if (this.tl) {
            this.tl.kill();
            this.tl = null;
        }
    }
}

// animation start at frame 8 until frame 10, showing from bottom to top
// animation end at frame 50
// letter D first animation start at frame 8
// letter U animation start at frame 11 and end at frame 24 (bottom to top)
// letter N animation start at frame 47 and end at frame 50 (top to bottom)
// letter DSecond animation start at frame 12 and end at frame 24 (bottom to top)
// letter EFirst animation start at frame 11 and end at frame 29 (middle line, bottom to top)
// letter R animation start at frame 13 and end at frame 26 (left to right, behind a mask)
// letter V animation start at frame 27 and end at frame 29 (middle line, bottom to top)
// letter I animation start at frame 11 and end at frame 34 (bottom to top)
// letter L animation start at frame 8 and doesn't move
// letter LSecond animation start at frame 14 and end at frame 31 (left to right)
// letter ESecond animation start at frame 24 and end at frame 35 (grow)
