import {XtalDecor} from 'xtal-decor/xtal-decor.js';
import {define} from 'xtal-element/lib/define.js';
export const route_changed = 'route-changed';
export class BeANavLink extends XtalDecor {
    static is='be-a-nav-link';
    on = {
        click:({self}: any, e: Event) =>{
            e.preventDefault();
            self.dispatchEvent(new CustomEvent(route_changed, {
                detail: {
                    link: this
                }
            }));
        }
    };
    init = (h: HTMLElement) => {};
    actions = [];
    upgrade = 'a';
    ifWantsToBe = 'a-nav-link';
}
define(BeANavLink);