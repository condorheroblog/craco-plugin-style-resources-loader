module.exports = {
    overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
        // Check webpack config
        if (
            !webpackConfig ||
            !webpackConfig.module ||
            !webpackConfig.module.rules ||
            typeof webpackConfig.module.rules !== 'object'
        ) {
            throw new Error('craco-sass-resources-loader error: no valid webpackConfig.module.rules');
        };

        // Check variable pluginOptions
        if ( Object.prototype.toString.call(pluginOptions) !== '[object Object]' ) {
            throw new Error('craco-sass-resources-loader error: variable pluginOptions should is an object');
        };

        // Check styleType property
        const mapStyleType = [ 'stylus', 'css', 'scss', 'sass', 'less' ];
        const styleType = pluginOptions.styleType;
        if ( typeof styleType !== 'string' ) {
            throw new Error('craco-sass-resources-loader error: variable styleType is not a string');
        } else if (!mapStyleType.includes(styleType)) {
            throw new Error('craco-sass-resources-loader error: The value of variable styleType can only be 「stylus | css | scss | sass | less」');
        };

        // Add the loader rule where needed
        const output = { ...webpackConfig };
        Object.keys(output.module.rules).forEach((ruleKey, ruleIndex) => {
            const rule = output.module.rules[ruleKey];
            if (Object.prototype.hasOwnProperty.call(rule, 'oneOf')) {
                rule.oneOf.forEach((oneOf, oneOfIndex) => {
                    if ( oneOf.test && oneOf.use ) {
                        let useCssProcessor = false;

                        switch ( styleType ) {
                            case 'scss':
                            case 'sass':
                                useCssProcessor = `${oneOf.test}`.includes('scss') || `${oneOf.test}`.includes('sass');
                                break;
                            case 'css':
                                useCssProcessor = `${oneOf.test}`.includes('css') || `${oneOf.test}`.includes('style');
                                break;
                            default:
                                useCssProcessor = `${oneOf.test}`.includes(styleType);
                                break;
                        };

                        if ( useCssProcessor ) {
                            const options = {};

                            // more option go link： https://www.npmjs.com/package/style-resources-loader#patterns
                            pluginOptions.patterns && (options.patterns = pluginOptions.patterns);
                            pluginOptions.injector && (options.injector = pluginOptions.injector);
                            pluginOptions.globOptions && (options.globOptions = pluginOptions.globOptions);
                            pluginOptions.resolveUrl && (options.resolveUrl = pluginOptions.resolveUrl);

                            output.module.rules[ruleIndex].oneOf[oneOfIndex].use.push({
                                loader: 'style-resources-loader',
                                options,
                            });
                        };
                    };
                });
            };
        });
        return output;
    }
};