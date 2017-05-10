import path from 'path';


/**
 * The Page class describes a single page within our application.
 *
 * Pages, like their webpages counterparts, are accessible through paths. They accept headers and url params (query
 * strings), where headers are supplied by the router itself and url params by whoever redirected to them.
 *
 * The script within the page can access the following parameters:
 * 1. the router, through `window.router`
 * 2. the headers, through `window.headers`
 * 3. the url params, through `window.params`
 */
class Page {

    /**
     * The path on which this page is available.
     * @type {string}
     */
    static path = '/';

    /**
     * The source file of the page's contents.
     * @type {string}
     */
    static src = '';

    /**
     * The title of the page.
     * @type {string}
     */
    static title = '';

    /**
     * Window styling options
     * @type {{}}
     */
    static windowOptions = {};

    /**
     * Creates a reference to an src file, relative to the inheriting page module.
     * @param src {string}
     * @returns {string}
     */
    static require(src) {

        return path.join(path.relative(__dirname, path.dirname(module.parent.parent.filename)), src);
    }

}


export {Page};
