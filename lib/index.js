/**
 * Register the module.
 *
 * @param {object} moduleOptions
 */
export default function FilesModule(moduleOptions = {}) {
    const hatchlyOptions = {
        apiBase: process.env.API_BASE,
        ...this.options.hatchly || {},
    };

    const options = {
        pathPrefix: '/file',
        ...hatchlyOptions,
        ...moduleOptions,
        ...(this.options.hatchly || {}).files || {},
    };

    const path = options.pathPrefix;
    const host = options.apiBase;

    /**
     * Handle the request intercept, and redirect the url to the API domain.
     *
     * @param {object} req
     * @param {object} res
     */
    const handler = (req, res) => {
        res.writeHead(301, {
            Location: [host, path, req.url].join(''),
        });

        res.end();
    };

    this.addServerMiddleware({ path, handler });
}
