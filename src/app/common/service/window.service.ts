import { Injectable } from "@angular/core";

@Injectable()
export class WindowService {
    private scrollTop: number;
    private isSafari: boolean;
    private isChrome: boolean;
    private isIE: boolean;
    private isFirefox: boolean;

    getWindow() {
        return window;
    }

    getAppProperty(propName: string) {
        return window[propName];
    }

    setAppProperty(propName: string, value: string) {
        window[propName] = value;
    }

    navigateTo(url: string, newWindow: boolean = false) {
        if (newWindow) {
            window.open(url, '_blank');
        }
        else {
            window.location.href = url;
        }
    }

    goToElementId(elementId: string, marginTop: number = 0) {
        let offsetTop = this.getOffsetTop(document.getElementById(elementId)) - marginTop;
        offsetTop -= this.isMobileDevice() ? 64 : 80;
        offsetTop -= !this.isMobileDevice() && this.isScrollingUp(offsetTop) ? 64 : 0;
        window.scrollTo(0, offsetTop);
    }

    scrollToTop() {
        this.scrollToPosition(0);
    }

    scrollToElement(element: HTMLElement, marginTop: number = 0) {
        let offsetTop = this.getOffsetTop(element) - marginTop;
        offsetTop -= this.isMobileDevice() ? 64 : 80;
        offsetTop -= !this.isMobileDevice() && this.isScrollingUp(offsetTop) ? 64 : 0;

        this.scrollToPosition(offsetTop);
    }

    private isScrollingUp(offsetTop: number) {
        return offsetTop < window.pageYOffset;
    }

    scrollToElementId(elementId: string, marginTop: number = 0) {
        let element: HTMLElement = document.getElementById(elementId);

        if (element) {
            let offsetTop = this.getOffsetTop(element) - marginTop;
            offsetTop -= this.isMobileDevice() ? 64 : 80;
            offsetTop -= !this.isMobileDevice() && this.isScrollingUp(offsetTop) ? 64 : 0;

            this.scrollToPosition(offsetTop);
        }
    }

    isMobileDevice() {
        return window.screen.width <= 480 || window.screen.height <= 480;
    }

    isTabletDevice() {
        return window.innerWidth <= 1200 && window.innerWidth > 480;
    }

    isTouchDevice() {
        return (('ontouchstart' in window)
            || (navigator.maxTouchPoints > 0)
            || (navigator.msMaxTouchPoints > 0));
    }

    isWebkitBrowser() {
        return this.browserIsChrome() || this.browserIsSafari() || this.browserIsFirefox();
    }

    disableScrollOnBody() {
        if (this.browserIsSafari()) {
            this.enableSafariOverscrollPrevention();
        }
        else {
            // Add margin to replace scroll bar
            let scrollBarWidth = window.innerWidth - document.body.clientWidth;
            document.body.style.marginRight = scrollBarWidth + 'px';

            document.body.style.overflowY = 'hidden';
        }
    }

    enableScrollOnBody() {
        if (this.browserIsSafari()) {
            this.disableSafariOverscrollPrevention();
        }
        else {
            document.body.style.overflowY = 'auto';

            // Remove margin
            document.body.style.marginRight = '';
        }
    }

    public browserIsSafari(): boolean {
        if (this.isSafari === undefined)
            this.isSafari = /Safari/.test(window.navigator.userAgent) && /Apple Computer/.test(window.navigator.vendor);

        return this.isSafari;
    }

    public browserIsIE(): boolean {
        if (this.isIE === undefined)
            this.isIE = /Trident/.test(window.navigator.userAgent) || /MSIE/.test(window.navigator.userAgent);

        return this.isIE;
    }

    private browserIsChrome() {
        if (this.isChrome === undefined)
            this.isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

        return this.isChrome;
    }

    private browserIsFirefox() {
        this.isFirefox = false;

        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            this.isFirefox = true;

            return this.isFirefox;
        }
    }

    private enableSafariOverscrollPrevention() {
        this.scrollTop = document.body.scrollTop;

        document.documentElement.style.height = '100%';
        document.documentElement.style.overflowY = 'hidden';

        document.body.style.height = '100%';
        document.body.style.overflowY = 'hidden';
        document.body.scrollTop = this.scrollTop;
    }

    private disableSafariOverscrollPrevention() {
        document.documentElement.style.height = 'auto';
        document.documentElement.style.overflowY = 'auto';

        document.body.style.height = 'auto';
        document.body.style.overflowY = 'auto';
        document.body.scrollTop = this.scrollTop;
    }

    private scrollToPosition(targetY: number) {
        const timeOut = 20;
        const scrollMargin = 32;
        let nextTarget;
        let multiplier = window.pageYOffset <= targetY ? 1 : -1;
        let speed = 0;
        let isFinalAdjustment = false;
        let currY;
        let initialY = window.pageYOffset;

        requestAnimationFrame(step);
        function step() {
            setTimeout(function () {

                nextTarget = (nextTarget || window.pageYOffset) + multiplier * (scrollMargin + 40 * speed);

                let compare = multiplier === 1 ? nextTarget < targetY : nextTarget > targetY;
                if (!compare) {
                    compare = isFinalAdjustment = true;
                    nextTarget = targetY;
                }
                if (currY !== window.pageYOffset) {
                    currY = window.pageYOffset;
                    window.scrollTo(0, nextTarget);
                    let y = ((currY - initialY) / (targetY - initialY)) * Math.PI;
                    speed = Math.sin(y);
                    if (!isFinalAdjustment) {
                        requestAnimationFrame(step);
                    }
                }
            }, timeOut);
        }
    }

    private getOffsetTop(element: HTMLElement) {
        let offsetTop = 0;

        while (element.offsetParent) {
            offsetTop += element.offsetTop;
            element = <HTMLElement>element.offsetParent;
        }

        return offsetTop;
    }
}